import { useState } from "react";
import Header from "./components/Header.jsx";
import SideNav from "./components/SideNav.jsx";
import PokeCard from "./components/PokeCard.jsx";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  return (
    <>
      <Header selectedPokemon={selectedPokemon} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
