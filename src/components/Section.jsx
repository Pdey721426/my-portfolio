export default function Section({ children , className = "", id = "" } ) {
  return (
    <section id={id} className={`py-24 px-6 md:px-16 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
