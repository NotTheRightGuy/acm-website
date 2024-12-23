import Container from "./Container";
import reviews from "@/constants/reviews";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    img?: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-72 md:w-96 cursor-pointer overflow-hidden rounded-xl border p-4 md:p-6",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
        >
            <div className="flex flex-row items-center gap-2 md:gap-4">
                <img
                    className="rounded-full w-8 h-8 md:w-12 md:h-12"
                    alt={name}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm md:text-base font-medium">
                        {name}
                    </figcaption>
                    <p className="text-xs md:text-sm font-medium text-gray-600">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-3 md:mt-4 text-xs md:text-sm leading-relaxed">
                {body}
            </blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <Container>
            <div
                className="flex items-center flex-col lg:pb-20 lg:mt-36 mt-60"
                id="testimonials"
            >
                <h3 className="font-semibold lg:text-2xl text-[#555] text-xl">
                    Testimonials
                </h3>
                <h1 className="font-bold font-fami lg:text-4xl mt-1 text-2xl">
                    What Our Members Say
                </h1>
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee className="[--duration:40s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:40s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </Container>
    );
}
