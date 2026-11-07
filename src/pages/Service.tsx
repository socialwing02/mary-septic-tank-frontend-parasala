import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Clock3,
  CheckCircle2,
  Droplets,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import drainage from "../assets/drainage.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import intro from "../assets/aboutus_banner1.png";
// import hero from "../assets/aboutus.jpg"
import { PHONE_HREF, PHONE_LABEL } from "../constants";

const IMAGES = {
  hero: intro,
  intro: intro,
};

/* ---------- Content ---------- */
const services = [
  {
    title: "Septic Tank Cleaning",
    description:
      "Professional cleaning and desludging to help keep your sanitation system functioning properly.",
    image: service2,
    alt: "Septic tank cleaning service",
    icon: Truck,
  },
  {
    title: "Septic Tank Maintenance",
    description:
      "Routine maintenance to identify potential issues and reduce the risk of blockages and odours.",
    image: service1,
    alt: "Septic tank maintenance service",
    icon: Wrench,
  },
  {
    title: "Drainage Cleaning",
    description:
      "Drainage cleaning to help maintain proper water flow and cleaner surroundings.",
    image: drainage,
    alt: "Professional drainage cleaning",
    icon: Droplets,
  },
];

const introPoints = [
  "Residential and commercial enquiries",
  "Septic tank cleaning and maintenance",
  "Drainage cleaning services",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Clear communication and a straightforward service enquiry process.",
  },
  {
    icon: Truck,
    title: "Professional Equipment",
    description:
      "Appropriate equipment to support efficient sanitation services.",
  },
  {
    icon: Sparkles,
    title: "Hygiene Focused",
    description:
      "Responsible sanitation practices and attention to cleanliness.",
  },
  {
    icon: MessageCircle,
    title: "Easy Enquiries",
    description:
      "Contact our team to discuss your property and service requirements.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Get in Touch",
    description: "Tell us about your property and sanitation requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Discuss Your Needs",
    description: "We discuss the location, access and required service.",
  },
  {
    icon: Clock3,
    title: "Arrange a Visit",
    description: "Confirm a suitable service schedule with our team.",
  },
  {
    icon: CheckCircle2,
    title: "Complete the Service",
    description: "The agreed work is carried out according to your needs.",
  },
];

/* ---------- Shared pieces ---------- */
const Eyebrow = ({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => (
  <span
    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
      light ? "text-emerald-300" : "text-emerald-700"
    }`}
  >
    {children}
  </span>
);

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const sectionClass = "px-5 py-20 sm:px-8 lg:px-12";

/* ---------- Page ---------- */
export default function Services() {
  return (
    <main className="text-slate-900">
      {/* Hero */}
      <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#0f2a24] sm:min-h-[520px]">
        <img
          src={IMAGES.hero}
          alt="Mary Septic Tank sanitation services"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#0f2a24]/80" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
        >
          <Eyebrow light>Our Services</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Cleaner spaces.{" "}
            <span className="text-emerald-300">Healthier living.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            Professional septic tank cleaning, maintenance and drainage services
            for homes and businesses.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 text-sm font-semibold text-[#0f2a24] transition-colors hover:bg-emerald-300"
            >
              Request a Service
              <ArrowRight size={16} />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              Call Us Today
            </a>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeUp}>
            <Eyebrow>About Our Service</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Sanitation solutions designed around{" "}
              <span className="text-emerald-700">your needs</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Regular septic tank cleaning helps manage accumulated waste and
              maintain your sanitation system. Delayed maintenance can
              contribute to unpleasant odours, blockages and other issues.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              We provide practical service options for residential and
              commercial properties. Contact us to discuss your situation and
              the appropriate service.
            </p>

            <ul className="mt-8 space-y-3">
              {introPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-gray-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <img
              src={IMAGES.intro}
              alt="Septic tank cleaning equipment"
              loading="lazy"
              className="h-[340px] w-full rounded-2xl object-cover sm:h-[460px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Services that keep things flowing
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Explore our sanitation services and find the right option for your
              property.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, image, alt, icon: Icon }) => (
              <motion.article
                key={title}
                {...fadeUp}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-gray-600">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition-colors hover:text-emerald-600"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why Mary Septic Tank</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              A straightforward approach to sanitation
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              We make arranging sanitation services simple, with clear
              communication and attention to your property&rsquo;s requirements.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} {...fadeUp} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-gray-600">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${sectionClass} bg-[#0f2a24] text-white`}>
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Eyebrow light>How It Works</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Four steps to get started
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              From your first enquiry to arranging the service, we keep the
              process clear and simple.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                className="rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={22} className="text-emerald-300" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className={`${sectionClass} bg-gray-50`}>
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <Eyebrow>Get in Touch</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Let&rsquo;s get your sanitation needs sorted
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-600">
            Tell us what service you need. Our team can discuss your
            requirements and help you arrange the next steps. Contact us to
            confirm service coverage and availability.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#15382e] px-7 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <Phone size={16} />
              {PHONE_LABEL}
            </a>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gray-300 px-7 text-sm font-semibold text-[#15382e] transition-colors hover:bg-white"
            >
              Send an Enquiry
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
