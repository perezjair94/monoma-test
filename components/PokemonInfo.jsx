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
        <div className="mb-4 bg-white px-6 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Size</h3>
          <p>Weight: {weight}</p>
          <p>height: {height}</p>
        </div>
        <div className="mb-4 bg-white px-6 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Abilities</h3>
          {abilities.map((ability) => (
            <div key={ability.slot}>
              <p>Solt: {ability.slot}</p>
              <p className="capitalize">Name: {ability.ability.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-white px-6 p-4 rounded-md">
          <h3 className="text-xl font-semibold">Tipos</h3>
          {types.map((type) => (
            <div key={type.slot}>
              <p>Solt: {type.slot}</p>
              <p className="capitalize">Name: {type.type.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
