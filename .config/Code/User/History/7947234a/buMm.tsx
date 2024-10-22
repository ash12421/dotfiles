import CanvasElem from "@/components/canvas";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="">
      <CanvasElem />
      <Hero />
      <Services />
      <Info />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
