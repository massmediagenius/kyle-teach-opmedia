import Nav from "@/components/Nav";
import WhatsNextHero from "@/components/whatsnext/WhatsNextHero";
import FromYou from "@/components/whatsnext/FromYou";
import FromUs from "@/components/whatsnext/FromUs";
import Timeline from "@/components/whatsnext/Timeline";
import LockIn from "@/components/whatsnext/LockIn";

export const metadata = {
  title: "What's Next · Kyle Teach × OPMEDIA",
  description: "The 14-day launch plan. What we need from Kyle. What OPMEDIA ships in return.",
};

export default function WhatsNextPage() {
  return (
    <main className="bg-bg text-ink">
      <Nav />
      <WhatsNextHero />
      <FromYou />
      <FromUs />
      <Timeline />
      <LockIn />
    </main>
  );
}
