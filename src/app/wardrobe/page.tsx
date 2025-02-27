"use client"
import TopNav from "../components/topnav";
import Clothes from "./components/clothes";
import { Tabs } from "./components/tabs";

export default function Wardrobe(){
  const tabs = [
    {
      title: "Clothes",
      value: "clothes",
      content: (
        <Clothes />
      ),
    },
    {
      title: "Outfits",
      value: "outfits",
      content: (
        <Clothes />
      ),
    }
    
  ];
 
    

    return(
        <div>
            <TopNav />

            <div>
                <div className="min-h-[20vh] bg-[#681E19] text-center py-10 box relative overflow-visible z-50">
                    <h1 className="text-8xl py-4">WARDROBE</h1>
                </div>
            </div>

            <div className="bg-white ">
              <Tabs tabs={tabs}/>
            </div>
        </div>

    )
}