"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogPortal,
} from "@/components/shadcn/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { useEffect, useState } from "react";
import { allEvents } from "@/data/events";
import Link from "next/link";

export default function AllEvents({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.getElementById('dialog-portal');
    if (container) {
      setPortalContainer(container);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal container={portalContainer}>
        <DialogContent className="!w-[65vw] !max-w-screen-xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-emerald-900">All Events</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {allEvents.map((event, idx) => (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <div className="relative h-48 flex-shrink-0">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${event.image}')` }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-emerald-900 mb-2 line-clamp-2">{event.title}</h3>
                      <div className="flex items-center text-emerald-700 mb-4">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="truncate">{event.date}</span>
                      </div>
                      <div className="flex items-center text-emerald-700">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="mt-auto pt-4">
                        <Link
                          href={event.registrationUrl}
                          className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <p className="text-center text-emerald-700">Calendar view coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
} 