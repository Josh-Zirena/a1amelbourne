import Image from "next/image";

export default function GearSection() {
  return (
    <section className="py-16 bg-gray-50" id="rudis-gear">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-emerald-800">
          Wrestling Gear from Rudis
        </h2>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
          Get top-quality wrestling gear and apparel from our official partner,{" "}
          <span className="font-semibold">Rudis</span>! NOTHING is REQUIRED.
          However, to compete athletes need a red and blue hue singlet set & A1A
          provides that opportunity through the store.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-[640px] h-[480px] bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
            <Image
              src="/images/gear/rudis-white.png"
              alt="Rudis Wrestling Gear"
              width={620}
              height={465}
              className="object-contain w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="max-w-md text-left">
            <ul className="mb-6 list-disc list-inside text-gray-700">
              <li>Singlets, shoes, headgear, and more</li>
              <li>Official A1A club apparel</li>
              <li>Exclusive discounts for members</li>
            </ul>
            <a
              href="https://www.rudis.com/collections/opp0031207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Shop Rudis Gear
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
