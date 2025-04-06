// src/components/EventsPage.jsx
import React from 'react';
import Event from './Event';
import event1 from '../componets/asset/event1.jpg';

const EventPage = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen py-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Events</h1>
            <p className="text-gray-400 text-lg">Upcoming Events Will Appear Here</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300">See All &gt;</a>
        </div>

        {/* Horizontal scrolling events container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
            {[...Array(8)].map((_, i) => (
              <div className="w-80 flex-shrink-0" key={i}>
                <Event
                  key={i}
                  title={`Testing Event ${i + 1}`}
                  date="November 8th, 2023"
                  description="This is a sample description for the event."
                  imageUrl={event1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;