import axios from "axios"

const client = axios.create({
    // It will work with the Spanish version of the API
  baseURL: "https://potterapi.onrender.com/es",
})

// Get all characters
export async function getCharacters() {
  const { data } = await client.get("/characters")
  return data
}

// Get all books
export async function getBooks() {
  const { data } = await client.get("/books")
  return data
}

// Get the number of books
export async function getBooksCount() {
  const data = await getBooks()
  return data.length
}

// Get all spells
export async function getSpells() {
  const { data } = await client.get("/spells")
  return data
}

// Get the number of spells
export async function getSpellsCount() {
  const data = await getSpells()
  return data.length
}