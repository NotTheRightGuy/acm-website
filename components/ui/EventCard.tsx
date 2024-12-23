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
            className="absolute top-0 left-0 w-full h-full flex"
            custom={custom}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="w-1/2 h-full relative">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="w-1/2 h-full bg-white p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-2 font-fami">
                    {event.title}
                </h2>
                <p className="text-lg text-gray-500 mb-4">
                    {event.description}
                </p>
                <div className="text-gray-800">{event.body}</div>
                <div className="mt-10 text-sm text-[#333] flex items-center gap-8">
                    <div>
                        <Calendar className="w-5 h-5 inline-block mr-2" />
                        <span>{event.date}</span>
                    </div>
                    <div>
                        <Users className="w-5 h-5 inline-block mr-2" />
                        <span>{event.attendees} attendees</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
