export default function LocationMap() {
  const location = {
    address: "74 Bulldog Blvd",
    city: "Melbourne",
    state: "FL",
    zip: "32901",
    mapsUrl: "https://www.google.com/maps/place/74+Bulldog+Blvd,+Melbourne,+FL+32901"
  };

  return (
    <section className="px-6 py-20 md:px-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Training Location</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-emerald-900">A1A Melbourne Wrestling</h3>
                <p className="text-emerald-700">
                  {location.address}<br />
                  {location.city}, {location.state} {location.zip}
                </p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="font-medium">Get Directions</span>
                </a>
              </div>
              
              <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.123456789012!2d-80.6088889!3d28.0833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0a2c3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s74+Bulldog+Blvd%2C+Melbourne%2C+FL+32901!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 