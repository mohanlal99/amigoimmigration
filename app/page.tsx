import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import CallButton from "@/components/Home/CallButton";
import FandQ from "@/components/Home/faq";
import Loan from "@/components/Home/loan";
import PopularVisa from "@/components/Home/PopularVisa";
import Review from "@/components/Home/Review";
import StartJourney from "@/components/Home/StartJourney";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-cyan-100 dark:from-cyan-900 to-blue-50 dark:to-blue-900">
      <Hero />
      <Services />
      <Loan />
      {/* <Video /> */}
      {/* <Brands/> */}
      <PopularVisa />
      <StartJourney />
      <Review />
      <FandQ />
      <CallButton />
      <Footer />
    </section>
  );
}
