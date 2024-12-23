"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Event } from "@/types/event";
import EventCard from "./EventCard";

interface EventCarouselProps {
    events: Event[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    const prevEvent = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + events.length) % events.length
        );
    };

    return (
        <div className="relative w-full h-[700px] lg:h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
                <EventCard
                    key={currentIndex}
                    event={events[currentIndex]}
                    custom={currentIndex}
                />
            </AnimatePresence>

            <button
                onClick={prevEvent}
                className="absolute left-4 bottom-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Previous event"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextEvent}
                className="absolute right-4 bottom-4 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Next event"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
