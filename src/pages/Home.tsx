import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp";
import {
  ArrowRight,
  Check,
  Droplets,
  Layers3,
  ShieldCheck,
  TruckIcon,
  Users,
  Wrench,
} from "lucide-react";
import { fadeIn } from "../variant";
import aboutImg from "../assets/About_us_ai.png";
import whyUsImg from "../assets/whyUs_ai.png";

/* ---------- Images (replace with your real paths) ---------- */
const IMAGES = {
  hero: heroImg,
  about: aboutImg,
  why: whyUsImg,
};

/* ---------- Content ---------- */
const aboutPoints = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "Dependable sanitation solutions.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Skilled and professional service.",
  },
  {
    icon: Droplets,
    title: "Safe & Clean",
    text: "Hygiene-focused work practices.",
  },
];

const services = [
  {
    icon: TruckIcon,
    title: "Septic Tank Cleaning",
    description:
      "Professional cleaning and desludging to keep your sanitation system working efficiently.",
    features: [
      "Safe & hygienic cleaning",
      "Modern vacuum tankers",
      "Residential & commercial",
    ],
  },
  {
    icon: Wrench,
    title: "Septic Tank Maintenance",
    description:
      "Routine maintenance to help prevent blockages, unpleasant odours, and costly repairs.",
    features: [
      "Regular inspections",
      "Blockage prevention",
      "Longer system lifespan",
    ],
  },
  {
    icon: Layers3,
    title: "Septic Tank Installation",
    description:
      "Practical installation solutions for residential and commercial properties.",
    features: [
      "Custom solutions",
      "Durable systems",
      "Standards-conscious work",
    ],
  },
  {
    icon: Droplets,
    title: "Drainage Cleaning",
    description:
      "Drain and pipeline cleaning to help maintain smooth water flow and better hygiene.",
    features: [
      "High-pressure cleaning",
      "Blockage removal",
      "Improved water flow",
    ],
  },
];

const benefits = [
  {
    title: "Reliable Septic Tank Services",
    description:
      "Dependable cleaning and sanitation services that help maintain hygienic surroundings for homes and businesses.",
  },
  {
    title: "A Customer-Focused Approach",
    description:
      "Professional service with clear communication and attention to your time and needs.",
  },
  {
    title: "Support When You Need It",
    description:
      "From enquiries to scheduling, we make the process straightforward and help you find the right solution.",
  },
];

/* ---------- Small shared pieces ---------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
    {children}
  </span>
);

const PrimaryLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#15382e] px-7 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
  >
    {children}
  </Link>
);

const reveal = (direction: "up" | "left" | "right", delay = 0.2) => ({
  variants: fadeIn(direction, delay),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
});

const sectionClass = "px-5 py-20 sm:px-8 lg:px-12";

/* ---------- Page ---------- */
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)} className="order-2 lg:order-1">
            <img
              src={IMAGES.hero}
              alt="Mary Septic Tank services"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[500px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)} className="order-1 lg:order-2">
            <Eyebrow>Reliable Septic Tank Services</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Trusted septic tank solutions for a{" "}
              <span className="text-emerald-700">
                cleaner, healthier environment
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Mary Septic Tank provides dependable septic tank cleaning,
              maintenance, and related services, with a focus on hygiene,
              efficient work, and customer satisfaction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink to="/contact">Get Started</PrimaryLink>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-sm font-semibold text-[#15382e] transition-colors hover:bg-gray-50"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <img
              src={IMAGES.about}
              alt="Professional septic tank cleaning service"
              loading="lazy"
              className="h-[340px] w-full rounded-xl object-contain sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your trusted partner in{" "}
              <span className="text-emerald-700">septic tank solutions</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              We provide dependable sanitation services for homes and
              businesses, helping customers maintain clean and hygienic
              surroundings through septic tank cleaning, maintenance, and
              drainage solutions.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Our focus is on reliable service, customer satisfaction, and
              responsible sanitation practices.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {aboutPoints.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryLink to="/about">Learn More About Us</PrimaryLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${sectionClass} bg-white`}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal("up", 0.1)}
            className="mx-auto max-w-2xl text-center"
          >
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Reliable septic tank services for a{" "}
              <span className="text-emerald-700">cleaner tomorrow</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Dependable sanitation and septic tank services for homes and
              businesses.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description, features }, i) => (
              <motion.article
                key={title}
                {...reveal("up", 0.1 + i * 0.08)}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-emerald-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryLink to="/services">
              View All Services
              <ArrowRight size={16} />
            </PrimaryLink>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <img
              src={IMAGES.why}
              alt="Professional sanitation and septic tank services"
              loading="lazy"
              className="h-[340px] w-full rounded-2xl object-cover sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>Why Mary Septic Tank</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Helping you maintain a{" "}
              <span className="text-emerald-700">
                cleaner, healthier environment
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Proper sanitation protects your property. Our goal is to make
              septic tank and drainage services convenient, dependable, and
              straightforward.
            </p>

            <ul className="mt-8 space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PrimaryLink to="/contact">Get in Touch</PrimaryLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#15382e] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Need help with your septic tank?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/70">
              Get in touch to discuss your cleaning, maintenance, or drainage
              requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 text-sm font-semibold text-[#0f2a24] transition-colors hover:bg-emerald-300"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
