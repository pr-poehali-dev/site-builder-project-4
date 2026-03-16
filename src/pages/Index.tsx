import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProsCons from "@/components/ProsCons";
import Cases from "@/components/Cases";
import Quiz from "@/components/Quiz";
import Game from "@/components/Game";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c29572e9-cc96-4cf0-8eec-717c08222259/files/1ca02858-8416-48d2-9ab1-449598b10418.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <About />
      <ProsCons />
      <Cases />
      <Quiz />
      <Game />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
