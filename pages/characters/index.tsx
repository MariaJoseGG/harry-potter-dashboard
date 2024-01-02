import DashboardLayout from "../components/layouts/DashboardLayout";
import { Character } from "../lib/definitions";
import { getCharacters } from "../services/api";
import CharacterCard from "../components/characters/character-card";

export default function Characters({ characters }: { characters: Character[] }) {
  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {characters.map((character: Character) => <CharacterCard key={character.index} character={character} />)}
        </div>
      </DashboardLayout>
    </>
  )
}

export async function getStaticProps() {
  const characters: Character[] = await getCharacters()

  return {
    props: {
      characters
    }
  }
}