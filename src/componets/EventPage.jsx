// src/components/EventsPage.jsx
import React from 'react';
import Event from './Event';
import event1 from '../componets/asset/event1.jpg';

const EventPage = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen py-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Events</h1>
        <p className="mb-8 text-gray-400 text-lg">Upcoming Events Will Appear Here</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(8)].map((_, i) => (
            <Event
              key={i}
              title={`Testing Event ${i + 1}`}
              date="November 8th, 2023"
              description="This is a sample description for the event."
              imageUrl={event1}
            />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
