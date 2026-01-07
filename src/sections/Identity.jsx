import Section from "../components/Section";

export default function Identity() {
  return (
    <Section  id="identity" className="py-16 ">
      <div >
        <h2 className="text-3xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          I’m a  web designer with a strong academic foundation in
          computer applications. I completed my BCA and MCA from  <span className="font-bold"><a href="https://www.brainwareuniversity.ac.in/" target="_blank">Brainware University </a></span>
                and have over 2 years of hands-on experience in web design
          and development.
          <br /> <br />I enjoy working with modern tools including AI-assisted
          development to build efficient and scalable applications.
        </p>
        <div className="mt-6 flex gap-4">
          <span className="px-4 py-1 text-sm rounded-full border border-gray-600 text-gray-300 flex items-center">
            Clarity
          </span>
          <span className="px-4 py-1 text-sm rounded-full border border-gray-600 text-gray-300 flex items-center">
            Reliability
          </span>
          <span className="px-4 py-1 text-sm rounded-full border border-gray-600 text-gray-300 flex items-center">
            Future-ready
          </span>
        </div>
      </div>
    </Section>
  );
}
