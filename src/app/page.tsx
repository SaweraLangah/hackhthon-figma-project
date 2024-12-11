import Image from "next/image";
import UpperHeader from "./components/header";
import Herosection from "./components/herosection";
import VitaClassicProduct from "./components/vita-classic";
import NeuralUniverseSection from "./components/neural-universe";


export default function Home() {
  return (
    <div>
      <Herosection />
      <VitaClassicProduct/>
      <NeuralUniverseSection/>
    
 
      
    
      
      
    </div>
   
  );
}
