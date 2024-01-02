import { getCharacters } from "@/pages/services/api"
import { useEffect, useState } from "react"

import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js"
ChartJS.register(BarController, BarElement, CategoryScale, LinearScale)
import { Bar } from "react-chartjs-2"

const labels = [
  'Gryffindor',
  'Hufflepuff',
  'Ravenclaw',
  'Slytherin'
]

export default function HousesChart() {
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    const getCharactersByHouse = async () => {
      const charactersByHouse = [0, 0, 0, 0]
      const characters = await getCharacters()

      characters.forEach((character: { house: any }) => {
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
      <Bar
        data={{
          labels,
          datasets: [
            {
              data,
              backgroundColor: [
                '#AE0001',
                '#FFED86',
                '#222F5B',
                '#2A623D'
              ]
            },
          ],
        }}
      />
    </>
  );
}