import { withAuthSync } from "@/utils/auth";
import { useEffect, useState } from "react";
import { getPokemons } from "@/services/pokemon.service";
import Layout from "@/components/Layout";
import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/Pagination";

export default withAuthSync(
  function Home() {
    const [data, setData] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      getPokemons(offset).then((pokemon) => setData(pokemon));
    }, [offset]);

    return (
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data &&
            data.results.map((pokemon, index) => (
              <PokemonCard
                key={index}
                offset={offset}
                index={index}
                {...pokemon}
              />
            ))}
        </div>
        {!!data && <Pagination offset={offset} onSetOffset={setOffset} />}
        <style global jsx>{`
          body {
            background-color: #f5f5f5;
          }
        `}</style>
      </Layout>
    );
  },
  { loggedOnly: true }
);
