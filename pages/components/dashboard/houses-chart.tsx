import { getCharacters } from "@/pages/services/api"
import { useEffect, useState } from "react"

import {
  Chart as ChartJS,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js"
ChartJS.register(PieController, ArcElement, Legend, Tooltip)
import { Pie } from "react-chartjs-2"
import { Character } from "@/pages/lib/definitions"

const labels: string[] = [
  'Gryffindor',
  'Hufflepuff',
  'Ravenclaw',
  'Slytherin'
]

export default function HousesChart() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const getCharactersByHouse = async (): Promise<void> => {
      const charactersByHouse: number[] = [0, 0, 0, 0]
      const characters: Character[] = await getCharacters()

      characters.forEach((character: { house: string }) => {
        switch (character.house) {
          case 'Gryffindor':
            charactersByHouse[0]++
            break
          case 'Hufflepuff':
            charactersByHouse[1]++
            break
          case 'Ravenclaw':
            charactersByHouse[2]++
            break
          case 'Slytherin':
            charactersByHouse[3]++
            break
        }
      })

      setData(charactersByHouse)
    }

    getCharactersByHouse()
  }, [])

  return (
    <>
      <Pie
        data={{
          labels,
          datasets: [{
            label: 'Personajes por casa',
            data,
            backgroundColor: [
              '#f24144',
              '#feea11',
              '#32b8fe',
              '#35b25d'
            ]
          }]
        }}
      />
    </>
  );
}