import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { fadeIn } from "../variant";
import aboutImg from "../assets/who_we_are.webp";
import bannerImg from "../assets/aboutus_banner1.png";
import whychooseus from "../assets/whychoosesu.png";

/* ---------- Images (replace with your real paths) ---------- */
const IMAGES = {
  banner: bannerImg,
  story: aboutImg,
  why: whychooseus,
};

/* ---------- Content ---------- */
const values = [
  {
    title: "Our Mission",
    description:
      "To provide dependable septic tank and sanitation services that help homes and businesses maintain cleaner, more hygienic surroundings.",
  },
  {
    title: "Our Vision",
    description:
      "To support cleaner communities through responsible sanitation practices, reliable service, and greater awareness of proper septic tank maintenance.",
  },
  {
    title: "Our Values",
    description:
      "We value customer satisfaction, reliability, cleanliness, and responsible service in every interaction with our customers.",
  },
];

const reasons = [
  {
    title: "Reliable Service",
    description:
      "Dependable sanitation services with a straightforward process for our customers.",
  },
  {
    title: "Hygiene and Cleanliness",
    description:
      "Proper septic tank maintenance helps reduce unpleasant odours, blockages, and sanitation problems.",
  },
  {
    title: "Customer-Focused Approach",
    description:
      "We listen to your needs and provide practical solutions for residential and commercial properties.",
  },
];

/* ---------- Shared pieces ---------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
    {children}
  </span>
);

const reveal = (direction: "up" | "left" | "right", delay = 0.2) => ({
  variants: fadeIn(direction, delay),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
});

const sectionClass = "px-5 py-20 sm:px-8 lg:px-12";

/* ---------- Page ---------- */
export default function About() {
  return (
    <>
      {/* Page banner */}
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[320px]">
        <img
          src={IMAGES.banner}
          alt="Mary Septic Tank sanitation services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f2a24]/75" />

        <div className="relative z-10 px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
            Committed to cleaner surroundings and dependable sanitation
            services.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Dedicated to a{" "}
              <span className="text-emerald-700">
                cleaner, healthier environment
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              Mary Septic Tank helps homes and businesses maintain clean and
              hygienic surroundings through dependable septic tank and
              sanitation services. We understand the importance of maintaining
              sanitation systems and addressing problems before they become more
              serious.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600">
              Our goal is to make septic tank cleaning and maintenance
              straightforward, with a focus on reliable service, customer
              satisfaction, and responsible sanitation practices.
            </p>
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <img
              src={IMAGES.story}
              alt="Mary Septic Tank team at work"
              loading="lazy"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[440px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission, vision, values */}
      <section className={`${sectionClass} bg-gray-50`}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal("up", 0.1)}
            className="mx-auto max-w-2xl text-center"
          >
            <Eyebrow>What Guides Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our mission, vision &amp; values
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              The principles behind our commitment to dependable sanitation
              services and cleaner surroundings.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                {...reveal("up", 0.1 + i * 0.08)}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={`${sectionClass} bg-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...reveal("right", 0.2)}>
            <img
              src={IMAGES.why}
              alt="Professional septic tank cleaning and maintenance"
              loading="lazy"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[440px]"
            />
          </motion.div>

          <motion.div {...reveal("left", 0.2)}>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Sanitation services you can{" "}
              <span className="text-emerald-700">depend on</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              A dependable sanitation service helps you maintain hygiene and
              manage septic tank issues effectively, with practical service and
              clear communication.
            </p>

            <ul className="mt-8 space-y-5">
              {reasons.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-[#15382e] px-7 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
