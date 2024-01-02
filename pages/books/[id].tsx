import Image from "next/image"

import DashboardLayout from "../components/layouts/DashboardLayout"
import { Book } from "../lib/definitions"
import { getBook, getBooks } from "../services/api"

export default function Page({ book }: { book: Book }) {
  return (
    <>
      <DashboardLayout>
        <div className="flex items-center max-[380px]:flex-col">
          <Image
            className="rounded-md"
            src={book.cover}
            width={130}
            height={300}
            alt={book.originalTitle}
          />
          <div>
            <p className="ml-6 font-bold text-xl">{book.title}</p>
            <p className="ml-6 text-sm mt-4 italic">{book.releaseDate}</p>
            <p className="ml-6 text-sm mt-3">{book.description}</p>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export async function getStaticPaths() {
  const books: Book[] = await getBooks()

  const paths = books.map((book: Book) => ({
    params: { id: book.index.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { id } }: { params: { id: string } }) {
  const book: Book = await getBook(id)

  return {
    props: {
      book
    }
  }
}