import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsPreviewSection from "../components/ProductsPreviewSection";
import ServicesPreviewSection from "../components/ServicesPreviewSection";
import FounderSection from "../components/FounderSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProductsPreviewSection />
        <ServicesPreviewSection />
        <FounderSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
