import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import Starbackground from "../components/Starbackground";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toogle */}
      <ThemeToggle />

      {/*Background Effects */}
      <Starbackground />

      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}

      <FooterSection />
    </div>
  );
};

export default Home;
