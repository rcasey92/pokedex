import styles from "./page.module.css";
import StoreProvider from './StoreProvider';

import Pokedex from "./containers/Pokedex";

export default function Home() {
  return (
    <StoreProvider>
      <main className={styles.main}>
        <Pokedex/>
      </main>
    </StoreProvider>
  );
}
