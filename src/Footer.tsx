
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

const MAPS_URL = "https://www.google.com/maps/place/MARY+SEPTIC+TANK+CLEANING+SERVIES/@8.2785109,77.0703773,11z/data=!4m10!1m2!2m1!1sMARY+SEPTIC+TANK+CLEANING+SERVIES,+Trivandrum+-+Nagercoil+Hwy,+Idichakkaplamoodu,+Parassala,+Keralam+695508!3m6!1s0x3b05ab560e283b11:0xf1751ad59c29a2a0!8m2!3d8.3546952!4d77.1441112!15sCmtNQVJZIFNFUFRJQyBUQU5LIENMRUFOSU5HIFNFUlZJQ0VTLCBUcml2YW5kcnVtIC0gTmFnZXJjb2lsIEh3eSwgSWRpY2hha2thcGxhbW9vZHUsIFBhcmFzc2FsYSwgS2VyYWxhIDY5NTUwOFpnImVtYXJ5IHNlcHRpYyB0YW5rIGNsZWFuaW5nIHNlcnZpY2VzIHRyaXZhbmRydW0gbmFnZXJjb2lsIGh3eSBpZGljaGFra2FwbGFtb29kdSBwYXJhc3NhbGEga2VyYWxhIDY5NTUwOJIBFXNlcHRpY19zeXN0ZW1fc2VydmljZeABAA!16s%2Fg%2F11nvhjyq54?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"

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
                  <MapPin size={17} className="mt-0.5 shrink-0" />

                  <span>
                    Trivandrum – Nagercoil Highway,
                    <br />
                    Idichakkapalamoodu,
                    <br />
                    Parassala, Kerala – 695508
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
