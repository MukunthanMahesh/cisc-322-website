export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 min-h-45 sm:min-h-65 md:min-h-90 lg:min-h-105 xl:min-h-135 2xl:min-h-165"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-top"
        style={{ backgroundImage: "url('/images/herobanner.png')" }}
      >
        <div className="w-full h-full bg-linear-to-b from-black/40 via-black/30 to-black/80" />
      </div>

    </section>
  );
}
