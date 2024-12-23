import Image from "next/image";
import { motion } from "framer-motion";
import { Event } from "@/types/event";
import { Users, Calendar } from "lucide-react";

interface EventCardProps {
    event: Event;
    custom: number;
}

export default function EventCard({ event, custom }: EventCardProps) {
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row"
            custom={custom}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative border-blue-500 border-dashed border-2">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="w-full lg:w-1/2 h-full bg-white p-4 lg:p-8 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-4xl font-bold mb-2 font-fami">
                    {event.title}
                </h2>
                <p className="text-base lg:text-lg text-gray-500 mb-4">
                    {event.description}
                </p>
                <div className="text-gray-800 text-sm lg:text-base">
                    {event.body}
                </div>
                <div className="mt-6 lg:mt-10 text-sm text-[#333] flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
                    <div>
                        <Calendar className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
                        <span>{event.date}</span>
                    </div>
                    <div>
                        <Users className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
                        <span>{event.attendees} attendees</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
