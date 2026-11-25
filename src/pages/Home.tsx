import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.webp";
import locationImg from "../assets/spHospital.webp"; // or .png / .jpg
import {
  ArrowRight,
  Check,
  Droplets,
  Layers3,
  MapPin,
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

const serviceAreas = [
  { name: "Kaliyakkavilai", state: "Tamil Nadu" },
  { name: "Cheruvarakonam", state: "Kerala" },
  { name: "Kottamom", state: "Kerala" },
  { name: "Amaravila", state: "Kerala" },
  { name: "Kannumamoodu", state: "Kerala" },
  { name: "Karakonam", state: "Kerala" },
  { name: "Vellarada", state: "Kerala" },
];
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
      "Professional septic tank cleaning and desludging services in Parasala to help maintain clean and hygienic surroundings.",
    features: [
      "Safe and hygienic cleaning",
      "Residential and commercial services",
      "Reliable cleaning solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Septic Tank Maintenance",
    description:
      "Septic tank maintenance services to help prevent blockages, unpleasant odours and sanitation problems.",
    features: ["Routine maintenance", "Blockage prevention", "System care"],
  },
  {
    icon: Layers3,
    title: "Septic Tank Waste Removal",
    description:
      "Septic waste removal services to help maintain proper sanitation and cleaner surroundings.",
    features: [
      "Septic waste removal",
      "Hygienic handling",
      "Service availability in Parasala",
    ],
  },
  {
    icon: Droplets,
    title: "Drainage Cleaning",
    description:
      "Drainage and pipeline cleaning services to help maintain smooth water flow and better hygiene.",
    features: ["Drain cleaning", "Blockage removal", "Improved water flow"],
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
              alt="Professional septic tank cleaning services in Parasala"
              fetchPriority="high"
              decoding="async"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px] lg:h-[500px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)} className="order-1 lg:order-2">
            <Eyebrow>Reliable Septic Tank Services</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Professional Septic Tank Cleaning Services in Parasala
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
              alt="Mary Septic Tank Cleaning services in Parasala"
              loading="lazy"
              className="h-[340px] w-full rounded-xl object-contain sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>About Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Septic Tank Cleaning in Parasala
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Mary Septic Tank Cleaning provides professional septic tank
              cleaning services in Parasala, including septic waste removal and
              maintenance solutions for residential and commercial properties.
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
              Septic Tank Cleaning Services
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

      {/* Areas We Serve */}
      <section id="service-areas" className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <motion.div
            {...reveal("up", 0.1)}
            className="mx-auto max-w-2xl text-center"
          >
            <Eyebrow>Our Service Locations</Eyebrow>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Areas We Serve
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Mary Septic Tank provides reliable septic tank cleaning and
              sanitation services across multiple locations. Contact us for
              professional service at your doorstep.
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((place, i) => (
              <motion.a
                key={place.name}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${place.name}, ${place.state}, India`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                {...reveal("up", 0.1 + i * 0.05)}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <MapPin size={22} />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">{place.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Septic Tank Cleaning Services
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-emerald-600"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...reveal("up", 0.2)} className="mt-12 text-center">
            <p className="mb-5 text-sm text-gray-600">
              Don't see your location? Contact us to check service availability.
            </p>

            <PrimaryLink to="/contact">
              Contact Us
              <ArrowRight size={16} />
            </PrimaryLink>
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <img
              src={IMAGES.why}
              alt="Septic tank maintenance and sanitation services"
              loading="lazy"
              className="h-[340px] w-full rounded-2xl object-cover sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>Why Mary Septic Tank</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Why Choose Mary Septic Tank Cleaning?
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Mary Septic Tank Cleaning serves customers in Parasala, Kerala,
              providing septic tank cleaning, waste removal and maintenance
              services for residential and commercial properties.
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

      {/* Frequently Asked Questions */}
      <section id="faq" className={`${sectionClass} bg-white`}>
        <div className="mx-auto max-w-4xl">
          <motion.div {...reveal("up", 0.1)} className="text-center">
            <Eyebrow>Common Questions</Eyebrow>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Find answers to common questions about septic tank cleaning
              services in Parasala.
            </p>
          </motion.div>

          <div className="mt-10 space-y-5">
            {[
              {
                question: "Do you provide septic tank cleaning in Parasala?",
                answer:
                  "Yes, Mary Septic Tank Cleaning provides septic tank cleaning services in Parasala. Contact us to confirm availability at your location.",
              },
              {
                question: "What septic tank services do you provide?",
                answer:
                  "We provide septic tank cleaning, septic waste removal and maintenance services, subject to service availability.",
              },
              {
                question: "How often should a septic tank be cleaned?",
                answer:
                  "Cleaning frequency depends on tank size, usage and system condition. Contact a professional for advice based on your requirements.",
              },
              {
                question: "Do you provide septic tank cleaning near me?",
                answer:
                  "Contact Mary Septic Tank Cleaning with your location to check whether our services are available in your area.",
              },
              {
                question: "How can I book a septic tank cleaning service?",
                answer:
                  "You can contact our team through the website contact page to discuss your requirements and arrange a service.",
              },
            ].map((faq, index) => (
              <motion.article
                key={faq.question}
                {...reveal("up", 0.1 + index * 0.05)}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby / Location */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <img
              src={locationImg} // ← add your image path here (e.g. import locationImg from "../assets/location.webp")
              alt="Mary Septic Tank Cleaning location near SP Hospital in Parasala"
              loading="lazy"
              className="h-[340px] w-full rounded-2xl object-cover bg-gray-100 sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>Our Location</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Septic Tank Cleaning Services in Parasala, Kerala
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Mary Septic Tank is situated near SP Hospital in Parasala, making
              it easy for residents and businesses in the area to reach us for
              septic tank cleaning, maintenance, and drainage services.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Whether you need routine cleaning or urgent assistance, our nearby
              presence helps us respond quickly and serve you better.
            </p>

            <div className="mt-10">
              <PrimaryLink to="/contact">
                Get Directions / Contact Us
              </PrimaryLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#15382e] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Contact Mary Septic Tank Cleaning
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
