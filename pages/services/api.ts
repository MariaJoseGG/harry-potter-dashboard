import axios from "axios"
import { Book, Character, Spell } from "../lib/definitions"

const client = axios.create({
    // It will work with the Spanish version of the API
  baseURL: "https://potterapi.onrender.com/es",
})

// Get all characters
export async function getCharacters(): Promise<Character[]> {
  const { data } = await client.get("/characters")
  return data
}

// Get all books
export async function getBooks(): Promise<Book[]> {
  const { data } = await client.get("/books")
  return data
}

// Get the number of books
export async function getBooksCount(): Promise<number> {
  const data = await getBooks()
  return data.length
}

// Get a specific book
export async function getBook(id: string): Promise<Book> {
  const { data } = await client.get(`/books?index=${id}`)
  return data
}

// Get all spells
export async function getSpells(): Promise<Spell[]> {
  const { data } = await client.get("/spells")
  return data
}

// Get the number of spells
export async function getSpellsCount(): Promise<number> {
  const data = await getSpells()
  return data.length
}