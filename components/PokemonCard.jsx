import Link from "next/link";

export default function PokemonCard({ name, index, offset }) {
  return (
    <Link
      key={name}
      href="/pokemon/[pokemonId]"
      as={`/pokemon/${index + 1 + offset}`}
    >
      <div className="bg-white rounded-lg shadow-sm">
        <div>
          <img
            className="h-60 w-full p-4 object-cover"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
              index + 1 + offset
            }.png`}
          />
        </div>
        <div className="p-4 text-teal-800 font-semibold text-lg capitalize">
          {name}
        </div>
      </div>
    </Link>
  );
}
