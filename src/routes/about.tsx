import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout, TerminalFrame } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AI Kshetra 2026" },
    { name: "description", content: "Meet AI Kshetra, the flagship technical event of the CSE AI & ML department and NEXAA." },
    { property: "og:title", content: "About AI Kshetra 2026" },
    { property: "og:description", content: "Where curiosity meets opportunity for future technology innovators." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() {
  return <PageLayout><div className="inner-page content-shell">
    <header className="page-intro"><p className="eyebrow">// SYSTEM / IDENTITY</p><h1>ABOUT AI KSHETRA<span className="cursor">_</span></h1><p>&gt; Where curiosity meets opportunity.</p></header>
    <TerminalFrame title="ABOUT --manifesto" className="prose-frame">
      <p>AI Kshetra is the flagship Technical Event of the CSE (AI &amp; ML) Department, organized by NEXAA – Next Gen Engineers &amp; AI Association. Part of Colorido 2K25, our college&apos;s National Level Fest, it celebrates innovation, creativity, and technological exploration.</p>
      <p>The event brings together students with diverse talents, inspiring them to engage with AI, ML, and emerging technologies. It fosters learning, collaboration, and problem-solving, encouraging participants to think beyond conventional approaches.</p>
      <p>With a vision to nurture future tech innovators, AI Kshetra is where curiosity meets opportunity – empowering students and promoting a forward-looking mindset.</p>
      <p className="lead-line">Join us and be part of a community shaping tomorrow&apos;s technological advancements!</p>
    </TerminalFrame>
    <div className="page-cta"><p>[ READY_TO_BUILD_THE_FUTURE? ]</p><Button asChild variant="terminal" size="lg"><Link to="/register">REGISTER NOW <ArrowRight /></Link></Button></div>
  </div></PageLayout>;
}
