import { AboutSection } from "./sections/about-section";
import { ContactSection } from "./sections/contact-section";
import { ExperienceSection } from "./sections/experience-section";
import { Hero } from "./sections/hero";
import { MethodologySection } from "./sections/methodology-section";
import { ProjectsSection } from "./sections/projects-section";
import { SkillsSection } from "./sections/skills-section";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <MethodologySection />
      <ContactSection />
    </>
  );
}
