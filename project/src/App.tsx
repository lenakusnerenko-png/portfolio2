import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-espresso text-ivory">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
