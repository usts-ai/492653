import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import ParcoursSection from '../components/ParcoursSection';
import PlateformesSection from '../components/PlateformesSection';
import DevisSection from '../components/DevisSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4FBFF] text-[#0A1628]">
      <Header />
      <main>
        <Hero />
        <MissionSection />
        <ParcoursSection />
        <PlateformesSection />
        <DevisSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
