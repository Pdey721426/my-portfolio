import Section from "../components/Section";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact() {
  return (
    <Section>
      <div
        id="contacts"
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-12
          p-8 md:p-12
        "
      >
        {/* LEFT: Contact Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-muted mb-8 max-w-md">
            Open to serious opportunities, collaborations, and impactful
            projects. Reach out directly or send a message.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-accent/10 text-accent">
                {/* <Mail size={20} /> */}
                <IoMdMailUnread size={20} />
              </span>
              <span className="text-sm md:text-base">
                deyprakash152@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-accent/10 text-accent">
                {/* <MapPin size={20} /> */}
                <FaLocationDot size={20} />
              </span>
              <span className="text-sm md:text-base">
                Kolkata, West Bengal, India
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-full bg-accent/10 text-accent">
                {/* <Phone size={20} /> */}
                <BsFillTelephoneFill size={20} />
              </span>
              <span className="text-sm md:text-base">Available on request</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          action="https://formsubmit.co/deyprakash152@gmail.com"
          method="POST"
          className="
            p-6 md:p-8
            space-y-5
          "
        >
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/20 focus:border-accent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/20 focus:border-accent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/20 focus:border-accent outline-none resize-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="
              min-w-40
              bg-accent text-bg
              py-3 rounded-lg
              font-semibold
              transition-all
              hover:scale-[1.02]
            "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
