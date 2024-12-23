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
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <img
                    className="rounded-full"
                    width="48"
                    height="48"
                    alt={name}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                />
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium">
                        {name}
                    </figcaption>
                    <p className="text-sm font-medium text-gray-600">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed">
                {body}
            </blockquote>
        </figure>
    );
};

export default function Testimonials() {
    return (
        <Container>
            <div
                className="flex items-center flex-col pb-20 mt-36"
                id="testimonials"
            >
                <h3 className="font-semibold text-2xl text-[#555]">
                    Testimonials
                </h3>
                <h1 className="font-bold font-fami text-4xl mt-1">
                    What Our Members Say
                </h1>
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:40s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:40s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </Container>
    );
}
