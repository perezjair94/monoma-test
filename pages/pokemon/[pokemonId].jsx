import Layout from "@/components/Layout";
import PokemonDescription from "@/components/PokemonInfo";
import { getPokemon } from "@/services/pokemon.service";
import { logout } from "@/utils/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    getPokemon(pokemonId).then((pokemon) => setData(pokemon));
  }, [pokemonId]);

  return (
    <Layout title={`Pokemon ${data?.name}`}>
      {!!data && (
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-teal-800">
            Pokemon {data.name} ID # {data.id}
          </h2>
          <PokemonDescription {...data} />
        </div>
      )}
      <style global jsx>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>
    </Layout>
  );
}
