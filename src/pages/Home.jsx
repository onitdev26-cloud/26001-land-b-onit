import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Process />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;