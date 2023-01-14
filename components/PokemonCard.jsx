import Link from "next/link";
import tw, { styled } from "twin.macro";

const Container = styled.div(({}) => [tw`bg-white rounded-lg shadow-sm`]);
const Title = styled.h2(({}) => [
  tw`p-4 text-teal-800 font-semibold text-lg capitalize`,
]);

export default function PokemonCard({ name, index, offset }) {
  return (
    <Link
      key={name}
      href="/pokemon/[pokemonId]"
      as={`/pokemon/${index + 1 + offset}`}
    >
      <Container>
        <div>
          <img
            className="h-76 lg:h-60 w-full p-4 object-cover"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1 + offset
            }.png`}
          />
        </div>
        <Title>{name}</Title>
      </Container>
    </Link>
  );
}
