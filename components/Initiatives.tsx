import Container from "./Container";
import NumberRow from "./NumberRow";
import EventCarousel from "./ui/EventCarousel";
import events from "@/constants/events";

export default function Initiatives() {
    return (
        <Container>
            <div className="flex items-center flex-col pb-20" id="events">
                <h3 className="font-semibold text-xl lg:text-2xl text-[#555]">
                    Our Past Events
                </h3>
                <h1 className="font-bold font-fami text-2xl text-center  lg:text-4xl mt-1">
                    Creating Impact Through Diverse Technical Events
                </h1>
            </div>
            <EventCarousel events={events} />
            <NumberRow />
        </Container>
    );
}
