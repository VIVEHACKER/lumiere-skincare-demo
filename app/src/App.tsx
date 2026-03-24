import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ProductFocus from './sections/ProductFocus';
import IngredientStory from './sections/IngredientStory';
import HowToUse from './sections/HowToUse';
import BenefitsGrid from './sections/BenefitsGrid';
import TextureSection from './sections/TextureSection';
import ResultsSection from './sections/ResultsSection';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main>
        <Hero />
        <div id="product">
          <ProductFocus />
        </div>
        <div id="ingredients">
          <IngredientStory />
        </div>
        <div id="how-to-use">
          <HowToUse />
        </div>
        <BenefitsGrid />
        <TextureSection />
        <div id="results">
          <ResultsSection />
        </div>
        <div id="reviews">
          <Testimonials />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
