import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";

export default function Home() {
    return (
        <div className="h-full relative">
            <section className="h-full flex flex-col pt-16">
                <Navbar />
                <Hero />
            </section>
            <section className="h-full flex flex-col">
                <About />
            </section>
            <section className="h-full flex flex-col">
                <Initiatives />
            </section>
        </div>
    );
}
