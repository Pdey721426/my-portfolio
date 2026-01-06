import Section from "../components/Section";
export default function Contact() {
  return (
    <Section>
      <div id="contacts" className="text-center">
        <h2 className="text-4xl font-heading mb-4">
          Let’s Work Together
        </h2>

        <p className="text-muted mb-6">
          Open to meaningful collaborations and serious opportunities.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block bg-accent text-bg px-6 py-3 rounded-lg font- heading"
        >
          Get in Touch
        </a>
      </div>
    </Section>
  );
}
