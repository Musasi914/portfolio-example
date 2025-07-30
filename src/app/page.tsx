import HomeSection from "@/features/home/HomeSection";
import Marquee from "@/features/marquee/Marquee";
import Contact from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeSection />
      <Marquee />
      <Contact />
    </main>
  );
}
