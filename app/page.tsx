import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="h-full relative overflow-x-hidden">
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
            <section className="flex flex-col">
                <Testimonials />
            </section>
            <section className="flex flex-col">
                <Team />
            </section>
            <section className="h-full flex flex-col">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}
