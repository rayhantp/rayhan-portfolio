import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProfileSection } from '@/components/ProfileSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResearchSection } from '@/components/ResearchSection';
import { MediaSection } from '@/components/MediaSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProfileSection />
        <ProjectsSection />
        <ResearchSection />
        <MediaSection />
      </main>
      <ContactSection />
    </>
  );
}
