import Image from "next/image"

import DashboardLayout from "@/pages/components/layouts/DashboardLayout"
import { getBooks } from "../services/api"
import { Book } from "../lib/definitions"
import Link from "next/link"

export default function Books({ books }: { books: Book[] }) {
  return (
    <div>
      <DashboardLayout>
        <div className="grid grid-cols-2 sm:grid-cols-4 place-content-center gap-5">
          {
            books.map((book: Book) => {
              return (
                <Link href={`/books/${book.index}`} className="flex flex-col items-center mb-6">
                  <Image
                    className="rounded-md"
                    src={book.cover}
                    width={100}
                    height={200}
                    alt={book.originalTitle}
                  />
                  <p className="font-semibold text-center">{book.title}</p>
                </Link>
              )
            })
          }
        </div>
      </DashboardLayout>
    </div>
  )
}

export async function getStaticProps() {
  const books: Book[] = await getBooks()

  return {
    props: {
      books
    }
  }
}