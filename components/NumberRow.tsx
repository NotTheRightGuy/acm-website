"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

export default function NumberRow() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={componentRef}
            className="mt-8 md:mt-10 w-full grid grid-cols-2 md:grid-cols-4 *:border gap-4 md:gap-8 *:rounded-lg *:shadow-md *:px-4 md:*:px-8 *:py-4 md:*:py-6 mb-8 md:mb-10"
        >
            <div className="text-center">
                <NumberFlow
                    value={isVisible ? 40 : 0}
                    className="text-6xl font-fami font-bold"
                    suffix="+"
                />
                <p className="text-[#333]">Members</p>
            </div>
            <div className="text-center">
                <NumberFlow
                    value={isVisible ? 25 : 0}
                    className="text-6xl font-fami font-bold"
                    suffix="+"
                />
                <p className="text-[#333]">Events</p>
            </div>
            <div className="text-center">
                <NumberFlow
                    value={isVisible ? 15 : 0}
                    className="text-6xl font-fami font-bold"
                    suffix="+"
                />
                <p className="text-[#333]">Workshops</p>
            </div>
            <div className="text-center">
                <NumberFlow
                    value={isVisible ? 10 : 0}
                    className="text-6xl font-fami font-bold"
                    suffix="+"
                />
                <p className="text-[#333]">Projects</p>
            </div>
        </div>
    );
}
