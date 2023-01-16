import Link from "next/link";
import tw, { styled } from "twin.macro";

export default function PokemonCard({ name, index, offset }) {
  return (
    <Link
      key={name}
      href="/pokemon/[pokemonId]"
      as={`/pokemon/${index + 1 + offset}`}
    >
      <Container>
        <Cover>
          <img
            className="h-72 lg:h-60 w-full p-3 object-cover"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1 + offset
            }.png`}
          />
          <FooterCover>
            <span className="font-semibold">May 20th 2020</span>
            <SizeButton>Size</SizeButton>
          </FooterCover>
        </Cover>
        <Content>
          <Title>{name}</Title>
          <Categories>
            <span>#category1</span>
            <span>#category2</span>
          </Categories>
        </Content>
      </Container>
    </Link>
  );
}

const Container = styled.div(() => [
  tw`relative overflow-hidden`,
  tw`bg-white rounded-lg shadow-sm `,
]);
const Title = styled.h2`
  ${tw`text-teal-800 font-semibold text-lg capitalize`}
`;

const Cover = styled.div(() => [tw`bg-[#f0e5c7]`]);

const FooterCover = styled.div(() => [
  tw`p-4 text-sm`,
  tw`flex justify-between `,
]);

const SizeButton = styled.span`
  ${tw`bg-teal-500 text-white rounded-full px-4`}
`;

const Content = styled.div(() => [
  tw`p-6 h-28`,
  tw`flex flex-col justify-between`,
]);
const Categories = styled.div(() => [
  tw`flex space-x-1 flex-wrap`,
  tw`text-sm text-gray-800`,
]);
