
import { ArrowUpRight, Droplets, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_HREF, PHONE_LABEL } from "./constants";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Septic Tank Cleaning",
  "Septic Tank Maintenance",
  "Drain Cleaning",
  "Emergency Cleaning",
];

const headingClass =
  "text-xs font-semibold uppercase tracking-[0.16em] text-white";

const linkClass =
  "text-sm text-white/60 transition-colors hover:text-emerald-300";

const MAPS_URL = "https://www.google.com/maps/dir/8.2064129,77.3262149/MARY+SEPTIC+TANK+CLEANING,+UNDER+BRIDGE,+bus+stop,+TVM+Rd,+near+PARVATHIPURAM,+PARVATIPURAM,+Nagercoil,+Kaniyakulam,+Tamil+Nadu+629003/@8.2026688,77.3219892,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3b04f138efa16fa3:0x349e5887e52ad583!2m2!1d77.4001926!2d8.1901547?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"

export default function Footer() {
  return (
    <footer className="bg-[#0f2a24] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* CTA strip */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Clean tanks. Healthy homes.
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Reliable septic tank cleaning and maintenance you can count on.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-[#0f2a24] transition-colors hover:bg-emerald-300"
            >
              <Phone size={16} />
              Call Us Now
            </a>

            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Request a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400 text-[#0f2a24]">
                <Droplets size={20} strokeWidth={1.8} />
              </span>

              <span>
                <span className="block text-lg font-bold leading-none tracking-tight">
                  MARY<span className="text-emerald-400">.</span>
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Septic Care Experts
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Professional septic tank cleaning and maintenance focused on
              reliability, cleanliness, and your peace of mind.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className={headingClass}>Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className={headingClass}>Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Address */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Contact</h3>

            <div className="mt-5 space-y-5">

              {/* Phone */}
              <div>
                <p className="text-xs text-white/50">Call us</p>

                <a
                  href={PHONE_HREF}
                  className="mt-1 inline-block text-sm font-medium transition-colors hover:text-emerald-300"
                >
                  {PHONE_LABEL}
                </a>
              </div>

              {/* Address */}
              <div>
                <p className="text-xs text-white/50">Our Location</p>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/60 transition-colors hover:text-emerald-300"
                >
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    TVM Road, Under Bridge,
                    <br />
                    Near Parvathipuram Bus Stop,
                    <br />
                    Parvathipuram.
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Mary Septic Care. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
