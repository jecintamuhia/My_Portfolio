// src/components/HomePage.tsx
import AboutSection from './AboutSection';
import ShowcaseSection from './ShowcaseSection';

const HomePage = () => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
  
      <AboutSection />

      <ShowcaseSection />
    </main>
  );
};

export default HomePage;