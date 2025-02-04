import Hero from './sections/Hero';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';
import PopularProduct from './sections/PopularProduct';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Nav from './components/Nav';


const App=()=>(
  <main className="relative">
      <Nav/>
    <section className="xl:padding-1  padding-b">
    <Hero/>
    </section>

    <section className="padding">
    <PopularProduct/>
    </section>

    <section className="padding">
    <SuperQuality/>
    </section>

    <section className="padding-x py-10">
    <Services/> 
    </section>

    <section className="padding">
    <SpecialOffer/> 
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/> 
    </section>
    <section className="padding-x padding-t pd-8 bg-black">
      <Footer/> 
    </section>


  </main>
);

export default App;