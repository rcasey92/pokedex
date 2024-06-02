import "./styles.css";
import StoreProvider from "./StoreProvider";
import Image from "next/image";
import labImage from "../../public/oaks-lab.jpg";
import Pokedex from "./containers/Pokedex";

export default function Home() {
  return (
    <StoreProvider>
      <main className="main">
        <h1 className="appHeading">Professor Oak&apos;s Pokedex</h1>
        <Image className="backgroundStyles" alt="Oaks lab" src={labImage} />
        <Pokedex />
      </main>
    </StoreProvider>
  );
}
