"use client";

export default function HeroSection() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("upcoming-events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center md:py-32 min-h-[80vh]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-emerald-800/50 z-0" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/images/wrestling-bg.png')] bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/wrestling-bg.png')" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight text-white drop-shadow-lg">
          A1A Melbourne Wrestling
        </h1>
        <p className="mt-4 text-lg text-emerald-50 font-medium max-w-2xl mx-auto">
          A Brevard County USAW & FAWA Youth Wrestling Member Club
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={scrollToEvents}
            className="min-w-[140px] px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-colors cursor-pointer text-base shadow-md border border-emerald-600"
          >
            View Events
          </button>
          <a
            href="https://checkout.square.site/merchant/MLAR107HZ4FZ4/checkout/VB4DXBB55ZAIAOR2PGXFFOPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[140px] px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-emerald-900 font-semibold rounded-lg transition-colors cursor-pointer text-base shadow-md border border-yellow-500 flex items-center justify-center"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
