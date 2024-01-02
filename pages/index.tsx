import { Inter } from 'next/font/google'
import DashboardLayout from './components/layouts/DashboardLayout'
import Card from './components/dashboard/card'
import { getBooksCount, getSpellsCount } from './services/api'
import HousesChart from './components/dashboard/houses-chart'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ numberOfBooks, numberOfSpells }: { numberOfBooks: number, numberOfSpells: number }) {
  return (
    <main>
      <DashboardLayout>
        {/* Cards with the number of available books and spells */}
        <div className='grid sm:grid-cols-2 gap-4'>
          <Card title="Libros" value={numberOfBooks} />
          <Card title="Hechizos" value={numberOfSpells} />
        </div>
        {/* Chart showing the number of characters in each house at Hogwarts */}
        <div className='mt-9'>
          <h2 className='text-center text-2xl font-semibold'>Personajes por casa</h2>
          <HousesChart />
        </div>
      </DashboardLayout>
    </main>
  )
}

export async function getStaticProps() {
  // The functions defined in /services/api are used to obtain these values
  const numberOfBooks = await getBooksCount()
  const numberOfSpells = await getSpellsCount()

  return {
    props: {
      numberOfBooks,
      numberOfSpells
    }
  }
}