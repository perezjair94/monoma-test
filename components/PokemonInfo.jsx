import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4`}
`;

const Cover = styled.img(() => [
  tw`bg-[#f0e5c7] rounded-md `,
  tw`p-4 w-full h-80`,
]);

const InfoBox = styled.div`
  ${tw`mb-4 bg-white px-6 p-4 rounded-md`}
`;

const InfoTitle = styled.h3`
  ${tw`text-xl font-semibold`}
`;

export default function PokemonDescription({
  sprites,
  weight,
  height,
  types,
  abilities,
}) {
  return (
    <Container>
      <Cover src={sprites.other.dream_world.front_default} alt="" />
      <div>
        <InfoBox>
          <InfoTitle>Size</InfoTitle>
          <p>Weight: {weight}</p>
          <p>height: {height}</p>
        </InfoBox>
        <InfoBox>
          <InfoTitle>Abilities</InfoTitle>
          {abilities.map((ability) => (
            <div key={ability.slot}>
              <p>Solt: {ability.slot}</p>
              <p className="capitalize">Name: {ability.ability.name}</p>
            </div>
          ))}
        </InfoBox>
        <InfoBox>
          <InfoTitle>Tipos</InfoTitle>
          {types.map((type) => (
            <div key={type.slot}>
              <p>Solt: {type.slot}</p>
              <p className="capitalize">Name: {type.type.name}</p>
            </div>
          ))}
        </InfoBox>
      </div>
    </Container>
  );
}
