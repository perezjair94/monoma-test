import tw, { styled } from "twin.macro";

const InfoBox = styled.div(() => [tw`mb-4 bg-white px-6 p-4 rounded-md`]);
const InfoTitle = styled.h3(() => [tw`text-xl font-semibold`]);

export default function PokemonDescription({
  sprites,
  weight,
  height,
  types,
  abilities,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      <div>
        <img
          src={sprites.other.dream_world.front_default}
          className="bg-white p-4 rounded-md w-full h-80"
          alt=""
        />
      </div>
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
    </div>
  );
}
