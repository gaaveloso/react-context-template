import Card from "../../components/Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";

function PokedexPage(props) {
  // const { pokedex, removeFromPokedex } = props;

  const context = useContext(GlobalContext)

  const {pokedex, removeFromPokedex } = context;

  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
