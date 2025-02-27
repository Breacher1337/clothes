import TopNav from "../components/topnav";
import aboutData from "./about.json";
import { WavyBackground } from "@/app/components/wavy-background";
import Footer from "../components/footer";

export default function Home(){

    return(
        <div>
            <TopNav />

            <div className="relative overflow-hidden box">
                <WavyBackground className="max-h-[10vh] text-white text-4xl font-bold animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <span className="text-6xl py-2"><span className="text-[#942D24]">Wear </span> Good <br /></span>
                <span className="text-6xl py-2">Feel <span className="text-[#942D24]"> Good</span></span>
                </WavyBackground>
            </div>
            <div className="min-h-[40vh] bg-[#681E19] text-center py-10 box">
                <h1 className="text-2xl py-4">{aboutData.description}</h1>
                <h1 className="px-96">{aboutData.mission}</h1>
            </div>

            <Footer />
        </div>
    )
}