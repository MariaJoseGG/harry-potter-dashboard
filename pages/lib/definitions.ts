// This file contains type definitions for the data

import { IconType } from "react-icons";

// Object type for SideNav links
export type NavLink = {
  name: string;
  href: string;
  icon: IconType;
}

// Type of object returned by the API for the endpoint /books
export type Book = {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
}

// Type of object returned by the API for the endpoint /characters
export type Character = {
  fullName: string;
  nicknames: string;
  house: string;
  interpretedBy: string;
  children: string[];
  image: string;
  index: number;
}

// Type of object returned by the API for the endpoint /spells
export type Spell = {
  spell: string;
  use: string;
  index: number;
}