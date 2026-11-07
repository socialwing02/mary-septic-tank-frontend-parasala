import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { PHONE_HREF, PHONE_LABEL } from "./constants";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center">
          <img
            src="/maryLogo.jpeg"
            alt="Mary Septic Care Experts"
            className="h-10 w-auto object-contain sm:h-16"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `border-b-2 py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-emerald-600 text-[#15382e]"
                    : "border-transparent text-gray-600 hover:text-[#15382e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-semibold text-[#15382e] transition-colors hover:text-emerald-700"
          >
            <Phone size={16} />
            {PHONE_LABEL}
          </a>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#15382e] px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Get a Free Quote
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-[#15382e] transition-colors hover:bg-gray-50 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-5 pb-5 pt-3 sm:px-6">
            <ul className="divide-y divide-gray-100">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-3.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-emerald-700"
                          : "text-gray-700 hover:text-[#15382e]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={PHONE_HREF}
                onClick={closeMenu}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-semibold text-[#15382e] transition-colors hover:bg-gray-50"
              >
                <Phone size={16} />
                Call Us
              </a>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#15382e] text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Get a Quote
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
