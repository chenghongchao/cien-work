import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";
import { ExperienceSection } from "./sections/experience-section";
import { Hero } from "./sections/hero";
import { MethodologySection } from "./sections/methodology-section";
import { ProjectsSection } from "./sections/projects-section";
import { ResultsSection } from "./sections/results-section";
import { ServicesSection } from "./sections/services-section";
import { SkillsSection } from "./sections/skills-section";

export function HomePage() {
  return (
    <>
      <Hero />

      <ResultsSection />

      <ServicesSection />

      <ProjectsSection />

      <ExperienceSection />

      <MethodologySection />

      <SkillsSection />

      <AboutSection />

      <ContactSection />
    </>
  );
}
