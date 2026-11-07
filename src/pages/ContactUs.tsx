import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PHONE_LABEL } from "../constants";

// Business location
const BUSINESS_ADDRESS =
  "TVM Road, Under Bridge, Near Parvathipuram Bus Stop, Parvathipuram";

const MAPS_URL =
  "https://www.google.com/maps/place/MARY+SEPTIC+TANK+CLEANING/@8.1901547,77.4001926,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f138efa16fa3:0x349e5887e52ad583!8m2!3d8.1901547!4d77.4001926!16s%2Fg%2F11nr0bvy07?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"


// Contact cards
const contactCards = [
  {
    icon: Phone,
    title: "Call our team",
    description: "Speak with us about your cleaning needs.",
    detail: PHONE_LABEL,
    href: `tel:${PHONE_LABEL}`,
  },
  {
    icon: Mail,
    title: "Email us",
    description: "Send us your questions or service requests.",
    detail: "Contact us by phone",
    href: `tel:${PHONE_LABEL}`,
  },
  {
    icon: Clock3,
    title: "Service scheduling",
    description: "Let us know when you need the service.",
    detail: "Request an appointment",
    href: `tel:${PHONE_LABEL}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find our location and get directions.",
    detail: "Parvathipuram, TVM Road",
    href: MAPS_URL,
    external: true,
  },
];

const serviceOptions = [
  "Septic Tank Cleaning",
  "Septic Tank Maintenance",
  "Drain Cleaning",
  "Emergency Cleaning",
  "Other Service",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    const message = [
      "Hello Mary Septic Care!",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Location: ${form.location}`,
      `Message: ${form.message || "No additional details"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/91${PHONE_LABEL}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden bg-[#f7f9f6] text-[#15382e]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#102d26]">
        <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              <Sparkles size={15} />
              We're here to help
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's get your
              <span className="block text-emerald-300">space clean.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Need septic tank cleaning or maintenance? Tell us what you need.
              Our team can help you discuss the service and arrange a suitable
              time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_LABEL}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-[#102d26] transition hover:bg-emerald-300"
              >
                <Phone size={18} />
                Call us now
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact-form"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Send an enquiry
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck className="shrink-0 text-emerald-300" size={20} />
              <span>Professional service, with your needs in mind.</span>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#245343] to-[#15382e] p-6 shadow-2xl sm:p-9">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[25px] border-white/[0.04]" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300 text-[#102d26]">
                <MessageCircle size={28} />
              </div>

              <p className="relative mt-8 text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">
                How can we help?
              </p>

              <h2 className="relative mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                A cleaner home starts with a conversation.
              </h2>

              <p className="relative mt-4 text-sm leading-7 text-white/65">
                Share your service requirements and location, and we'll help you
                with the next step.
              </p>

              <a
                href={`tel:${PHONE_LABEL}`}
                className="relative mt-8 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-white/50">Talk to our team</p>
                    <p className="mt-1 font-bold text-white">
                      +91 {PHONE_LABEL}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="shrink-0 text-emerald-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 max-w-2xl"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
            Get in touch
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            We'd love to hear from you.
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Choose a contact option or send us your service enquiry below.
          </p>
        </motion.div>

        {/* Four contact cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-[#15382e] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700"
                  />
                </div>

                <h3 className="mt-6 text-lg font-extrabold">{card.title}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                  {card.description}
                </p>

                <p className="mt-4 text-sm font-bold text-emerald-800">
                  {card.detail}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Business Location Map */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 max-w-2xl"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
            Find Us
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Visit our location.
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Find Mary Septic Care at Parvathipuram. Visit us or get directions
            to our location.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1250647335632!2d77.39761767573381!3d8.190154691841503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f138efa16fa3%3A0x349e5887e52ad583!2sMARY%20SEPTIC%20TANK%20CLEANING!5e0!3m2!1sen!2sin!4v1794034020892!5m2!1sen!2sin"
            className="h-[350px] w-full sm:h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>

          {/* Map details */}
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                <MapPin size={23} />
              </div>

              <div>
                <p className="font-bold text-[#15382e]">Mary Septic Care</p>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {BUSINESS_ADDRESS}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="scroll-mt-28 border-y border-gray-100 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
              Send an enquiry
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Tell us what
              <span className="text-emerald-700"> you need.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Fill in the details, select a service, and send your enquiry
              directly to our WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Choose the service you need",
                "Tell us your location",
                "Send your enquiry through WhatsApp",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-700"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Service location information */}
            <div className="mt-9 flex items-start gap-3 rounded-2xl bg-[#f2f7f3] p-4">
              <MapPin size={21} className="mt-0.5 shrink-0 text-emerald-800" />

              <div>
                <p className="font-bold">Service location</p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Include your area or town so the team can discuss service
                  availability with you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enquiry form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-100 bg-[#fbfcfa] p-5 shadow-xl shadow-gray-900/[0.04] sm:p-8 lg:p-9"
          >
            <div className="mb-7">
              <h3 className="text-xl font-black">Your service enquiry</h3>

              <p className="mt-2 text-sm text-gray-500">
                Fields marked with * are required.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Your name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Mobile number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Service */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Service required *
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer location */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Your location *
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Enter your area or town"
                  value={form.location}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Additional details */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Additional details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your requirements..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={1000}
                  className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>
            </div>

            {/* Validation error */}
            {error && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#15382e] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-700/20"
            >
              <Send size={17} />
              Send Enquiry on WhatsApp
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              Your enquiry opens WhatsApp with the details filled in. You can
              review the message before sending it.
            </p>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
