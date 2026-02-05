import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoLibrary } from "@/components/VideoLibrary";
import { LiveStream } from "@/components/LiveStream";
import { AppDownload } from "@/components/AppDownload";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoLibrary />
        <LiveStream />
        <AppDownload />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
