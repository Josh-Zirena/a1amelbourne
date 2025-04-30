// import { Button } from "@/components/shadcn/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-20 text-center md:py-32 min-h-[80vh]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-800/90 z-0" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('/images/wrestling-bg.jpg')] bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/wrestling-bg.jpg')" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl leading-tight text-white drop-shadow-lg">
          Welcome to A1A Melbourne Wrestling
        </h1>
        <p className="mt-4 text-lg text-emerald-100 font-medium max-w-2xl mx-auto">
          A Brevard County USAW & FAWA Youth Wrestling Club Charter Member
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-colors">
            View Events
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
