export default function ContactSection() {
  return (
    <section className="px-6 py-20 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-900">Contact Us</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-800 transition-colors">Email</h3>
                <p className="text-emerald-700 group-hover:text-emerald-600 transition-colors">director@a1amelbournewrestling.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-800 transition-colors">Phone</h3>
                <p className="text-emerald-700 group-hover:text-emerald-600 transition-colors">(321) 223-3191</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer">
              <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-800 transition-colors">Location</h3>
                <p className="text-emerald-700 group-hover:text-emerald-600 transition-colors">123 Wrestling Way<br />Melbourne, FL 32901</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-emerald-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-900">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-900">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-900">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 