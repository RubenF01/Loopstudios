import Head from "next/head";
import Hero from "../components/Hero";
import LeaderSection from "../components/LeaderSection";
import CreationsSection from "../components/CreationsSection";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { useMedia } from "react-use";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!sidebar);
  const desktopSize = useMedia("(min-width: 1024px)", true);

  return (
    <div>
      <Head>
        <title>Loopstudios</title>
        <meta name="description" content="Technology website landing page" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <SideBar handleSidebar={handleSidebar} sidebar={sidebar} />
        <Hero handleSidebar={handleSidebar} desktopSize={desktopSize} />
        <LeaderSection />
        <CreationsSection desktopSize={desktopSize} />
        <Footer desktopSize={desktopSize} />
      </main>
    </div>
  );
}
