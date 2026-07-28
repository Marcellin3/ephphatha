import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ephphatha_admin";
const MAX_AGE = 60 * 60 * 8;

function config() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!email || !password || !secret) return null;
  return { email, password, secret };
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function credentialsMatch(email: string, password: string) {
  const settings = config();
  if (!settings) return false;
  const matches = (value: string, expected: string) => {
    const valueBuffer = Buffer.from(value);
    const expectedBuffer = Buffer.from(expected);
    return valueBuffer.length === expectedBuffer.length && timingSafeEqual(valueBuffer, expectedBuffer);
  };
  const emailMatches = matches(email, settings.email);
  const passwordMatches = matches(password, settings.password);
  return emailMatches && passwordMatches;
}

export async function createAdminSession() {
  const settings = config();
  if (!settings) throw new Error("Configuration administrateur manquante.");
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + MAX_AGE * 1000 })).toString("base64url");
  const value = `${payload}.${sign(payload, settings.secret)}`;
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE,
    path: "/",
  });
}

export async function isAdmin() {
  const settings = config();
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!settings || !value) return false;
  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;
  const expected = sign(payload, settings.secret);
  if (signature.length !== expected.length || !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString()).exp > Date.now();
  } catch {
    return false;
  }
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}
