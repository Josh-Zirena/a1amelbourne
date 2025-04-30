export default function MissionStatement() {
  return (
    <section className="px-6 py-20 md:px-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Mission Statement</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-emerald-900 text-lg leading-relaxed">
            At A1A Melbourne Wrestling we strive for every athlete that walks into 
            the palaestra leaves with joyous fulfillment. We focus on ensuring our student-athletes 
            have the freedom to be courageous. We commit our wrestlers to display unwavering respect, 
            not only towards others, but mainly themselves. We remind our young men and women to honor 
            those that have sacrificed to get them to where they are today. We accomplish greatness and a 
            lasting legacy when these values are forged into the process of achieving our shared common goals.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 bg-[url('/images/wrestling-action.jpg')] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/wrestling-action.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
