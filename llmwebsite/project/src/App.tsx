import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechnicalDetails from './components/TechnicalDetails';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechnicalDetails />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;