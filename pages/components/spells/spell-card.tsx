import { Spell } from "@/pages/lib/definitions";

export default function SpellCard({ spell }: { spell: Spell }) {
  return (
    <div className="p-4 bg-gradient-to-b from-jambalaya-200 to-jambalaya-500 rounded-br-lg rounded-tl-lg">
      <h2 className="text-center text-lg font-bold">{spell.spell}</h2>
      <p className="text-center">{spell.use}</p>
    </div>
  )
}