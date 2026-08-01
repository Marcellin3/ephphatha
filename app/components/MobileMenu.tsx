"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/apropos" },
  {
    label: "Nos programmes",
    href: "/programmes",
    children: [
      { label: "Impact", href: "/impact" },
    ],
  },
  {
    label: "Ressources",
    href: "/actualites",
    children: [
      { label: "Actualités", href: "/actualites" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (label: string) => {
    setExpandedItems((prev: Set<string>) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="mobile-menu-trigger"
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <div className="hamburger-icon">
          <span className={`hamburger-line ${isOpen ? "is-open" : ""}`} />
          <span className={`hamburger-line ${isOpen ? "is-open" : ""}`} />
          <span className={`hamburger-line ${isOpen ? "is-open" : ""}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">CISG</span>
          <button
            className="mobile-menu-close"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            <X />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {nav.map((item) => (
            <div key={item.label} className="mobile-menu-item">
              {"children" in item && item.children ? (
                <>
                  <button
                    className="mobile-menu-link mobile-menu-link--with-children"
                    onClick={() => toggleSubmenu(item.label)}
                    aria-expanded={expandedItems.has(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`chevron ${
                        expandedItems.has(item.label) ? "is-expanded" : ""
                      }`}
                    />
                  </button>
                  {expandedItems.has(item.label) && (
                    <div className="mobile-menu-submenu">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="mobile-menu-sublink"
                          onClick={toggleMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mobile-menu-actions">
            <Link
              href="/contact"
              className="mobile-menu-action-btn mobile-menu-action-btn--secondary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/programmes#don"
              className="mobile-menu-action-btn mobile-menu-action-btn--primary"
              onClick={toggleMenu}
            >
              Faire un don
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
