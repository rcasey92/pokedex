import { useGetPokemonByNameQuery } from "@app/containers/Pokedex/redux/api";
import { selectId } from "@app/containers/Pokedex/redux/pokemonState";
import capitalizeFirstLetter from "@app/utils/capitalizeFirstLetter";
import CircularShadow from "@app/components/CircularShadow";
import { useAppSelector } from "@redux/hooks";

import Image from "next/image";

import styles from "./styles.module.css";

const Screen = () => {
  const currentId: string = useAppSelector(selectId);
  const sanitizedId: string = currentId.replace(/^0+/, "");
  const { data, error, isLoading } = useGetPokemonByNameQuery(sanitizedId);
  // temporary type assertion to avoid typescript error, this needs a real typing
  const sprite_url: string = (data as any)?.sprites?.front_default;

  return (
    <section className={styles.screenBorder}>
      <CircularShadow
        className={styles.doubleIndicators}
        id="shadow"
        label="decorative indicator lights"
      >
        <circle fill="#fb5145" cx={180} cy={15} r={10} />
        <circle fill="#fff" cx={177} cy={12.5} r={2.5} />
        <circle fill="#fb5145" cx={145} cy={15} r={10} />
        <circle fill="#fff" cx={142} cy={12.5} r={2.5} />
      </CircularShadow>
      <div className={styles.screen}>
        {(currentId === "0" && !isLoading) || error ? (
          <p
            aria-label="Welcome to your pokedex! Please enter a valid pokemon id with the input keys to get started."
            className={styles.introductionText}
          >
            Welcome to your pokedex!
            <br />
            <br />
            Please enter a valid pokemon ID to get started.
          </p>
        ) : isLoading ? (
          <p className={styles.introductionText}>Loading...</p>
        ) : (
          <>
            <h2 className={styles.pokemonTitle}>
              {`#${sanitizedId}: ${capitalizeFirstLetter((data as any)?.name)}`}
            </h2>
            <Image
              height={225}
              width={225}
              className={styles.spriteImage}
              alt="${data.name}"
              src={sprite_url}
            />
          </>
        )}
      </div>
      <svg className={styles.bottomIndicators}>
        <g>
          <circle filter="url(#shadow)" fill="#fb5145" cx={75} cy={15} r={15} />
          <circle fill="#fff" cx={70} cy={11.5} r={3.25} />
        </g>
        <g>
          <line stroke="black" x1={200} y1={2} x2={275} y2={2} />
          <line stroke="black" x1={200} y1={9.5} x2={275} y2={9.5} />
          <line stroke="black" x1={200} y1={17} x2={275} y2={17} />
          <line stroke="black" x1={200} y1={24.5} x2={275} y2={24.5} />
          <line stroke="black" x1={200} y1={32} x2={275} y2={32} />
        </g>
      </svg>
    </section>
  );
};

export default Screen;
