import DashboardLayout from "../components/layouts/DashboardLayout"
import SpellCard from "../components/spells/spell-card"
import { Spell } from "../lib/definitions"
import { getSpells } from "../services/api"

export default function Spells({ spells }: { spells: Spell[] }) {
  return (
    <>
      <DashboardLayout>
        <div className="grid gap-5 min-[821px]:grid-cols-3">
          {spells.map((spell: Spell) => <SpellCard key={spell.index} spell={spell} />)}
        </div>
      </DashboardLayout>
    </>
  )
}

export async function getStaticProps() {
  const spells: Spell[] = await getSpells()

  return {
    props: {
      spells
    }
  }
}