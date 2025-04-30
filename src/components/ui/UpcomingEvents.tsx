"use client";

import { allEvents } from "@/data/events";
import { useState, useMemo } from "react";
import AllEvents from "./AllEvents";

export default function UpcomingEvents() {
  const [isAllEventsOpen, setIsAllEventsOpen] = useState(false);

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

    return allEvents
      .filter((event) => {
        // Parse the event date string into a Date object
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
      })
      .sort((a, b) => {
        // Sort by date
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })
      .slice(0, 2); // Take the first two upcoming events
  }, []);

  return (
    <div className="bg-emerald-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Don&apos;t miss out on the action! Join us for our upcoming
            wrestling events in Melbourne, FL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full max-w-[500px] mx-auto w-full"
            >
              <div className="relative h-48 flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-emerald-700 mb-4">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center text-emerald-700">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsAllEventsOpen(true)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 transition-colors"
          >
            View All Events
          </button>
        </div>
      </div>

      <AllEvents
        isOpen={isAllEventsOpen}
        onClose={() => setIsAllEventsOpen(false)}
      />
    </div>
  );
}
