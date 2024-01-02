import { RiDashboardFill } from 'react-icons/ri'
import { FaBook } from 'react-icons/fa'
import { GiSpellBook } from 'react-icons/gi'
import { IoPersonCircle } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  {
    name: 'Inicio',
    href: '/',
    icon: RiDashboardFill
  },
  {
    name: 'Libros',
    href: '/books',
    icon: FaBook
  },
  {
    name: 'Personajes',
    href: '/characters',
    icon: IoPersonCircle
  },
  {
    name: 'Hechizos',
    href: '/spells',
    icon: GiSpellBook
  }
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-jambalaya-50 hover:text-jambalaya-900 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'bg-jambalaya-100' : ''}`}
        >
          <link.icon className="w-6" />
          <p className="hidden sm:block">{link.name}</p>
        </Link>
      ))}
    </>
  )
}