import "./styles.css";
import StoreProvider from "./StoreProvider";

import Pokedex from "./containers/Pokedex";

export default function Home() {
  return (
    <StoreProvider>
      <main className="main">
        <Pokedex />
      </main>
    </StoreProvider>
  );
}
