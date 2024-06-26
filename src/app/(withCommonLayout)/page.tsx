import CounterSection from "@/components/ui/HomePage/CounterSection/CounterSection";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import HowWorks from "@/components/ui/HomePage/HowWorks/HowWorks";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";

const Home = () => {
  return (
    <>
     <HeroSection/>
     <Specialist/>
     <TopRatedDoctors/>
     <WhyUs/>
     <HowWorks/>
     <CounterSection/>
    
    </>
  );
};

export default Home;
