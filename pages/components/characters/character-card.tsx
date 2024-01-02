import { Character } from "@/pages/lib/definitions";
import Image from "next/image";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <>
      <div className={`flex flex-col items-center p-5 border rounded ${character.house === 'Gryffindor' ? 'bg-gryffindor-200 border-gryffindor-950' : character.house === 'Hufflepuff' ? 'bg-hufflepuff-100 border-hufflepuff-500' : character.house === 'Ravenclaw' ? 'bg-ravenclaw-100 border-ravenclaw-950' : 'bg-slytherin-200 border-slytherin-900'}`}>
        <p className="pb-3 italic">{character.house}</p>
        <Image
          src={character.image}
          alt={character.fullName}
          width={100}
          height={100}
        />
        <p className="font-bold pt-3 text-center">{character.fullName}</p>
      </div>
    </>
  );
}