import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DesignedFor from "@/components/DesignedFor";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DesignedFor />
        <Problem />
        <Solution />
        <Features />
        <Dashboard />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
