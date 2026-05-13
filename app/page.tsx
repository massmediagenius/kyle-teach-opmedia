import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrutalMirror from "@/components/BrutalMirror";
import WinningReels from "@/components/WinningReels";
import PrestigeDiscovery from "@/components/PrestigeDiscovery";
import NewBrand from "@/components/NewBrand";
import IGMockup from "@/components/IGMockup";
import ContentPillars from "@/components/ContentPillars";
import Funnel from "@/components/Funnel";
import BeforeAfter from "@/components/BeforeAfter";
import OPMedia from "@/components/OPMedia";
import FOMOClose from "@/components/FOMOClose";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <main className="bg-bg text-ink">
      <Nav />
      <Hero />
      <BrutalMirror />
      <WinningReels />
      <PrestigeDiscovery />
      <NewBrand />
      <IGMockup />
      <ContentPillars />
      <Funnel />
      <BeforeAfter />
      <OPMedia />
      <FOMOClose />
      <CTA />
    </main>
  );
}
