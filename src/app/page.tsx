import styles from "./styles.module.css";
import StoreProvider from "./StoreProvider";
import Image from "next/image";
import labImage from "../../public/oaks-lab.jpg";
import Pokedex from "@app/containers/Pokedex";

export default function Home() {

  return (
    <StoreProvider>
      <main className={styles.main}>
        <h1 className={styles.appHeading}>
          {`Professor Oak's Pokedex`}
        </h1>
        <Image
          className={styles.backgroundStyles}
          alt="Oaks lab"
          src={labImage}
          priority={true} 
        />
        <Pokedex />
      </main>
    </StoreProvider>
  );
}
