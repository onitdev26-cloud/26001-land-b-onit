import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import { useState } from "react";
import InstallPWA from "../components/InstallPWA";

function Home() {
    const [showExitPopup, setShowExitPopup] = useState(false);

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
            <Footer 
                onExit={() => setShowExitPopup(true)}
            />

            <InstallPWA
                showExitPopup={showExitPopup}
                setShowExitPopup={setShowExitPopup}
            />
        </>
    );
}

export default Home;