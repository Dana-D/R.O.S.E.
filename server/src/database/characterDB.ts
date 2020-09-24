import mongoose from "mongoose";
import { log } from "../tools/logger";

import User from "../models/User";
import Character from "../models/Character";


const objectID = mongoose.Types.ObjectId;

/**
 * Character related Database queries
 */
export const getAllCharacters = async () => {
   return await Character.find({}).exec();
}

export const getCharacterByID = async (id: string) => {
   return await Character.findById(objectID(id)).exec();
}

export const getCharactersByAuthorID = async (id: string) => {
   return await Character.find({ author: id }).exec();
}

export const getCharactersByAuthorName = async (name: string) => {
   const author = await User.findOne({ userName: name }).exec();
   return await Character.find({ author: author.id }).exec();
}

export const getCharactersByFirstName = async (name: string) => {
   return await Character.find({ firstName: name }).exec();
}

export const getCharactersByLastName = async (name: string) => {
   return await Character.find({ lastName: name }).exec();
}

export const getCharactersByAlias = async (name: string) => {
   return await Character.find({ alias: name }).exec();
}

export const createCharacter = async (character: any) => {
   const char = new Character(character);
   await char.save();
   return char.id;
}

export const updateCharacter = async (character: any) => {
   return await Character.findByIdAndUpdate(character.id,{
      author: character.author,
      alias: character.alias,
      firstName: character.firstName,
      lastName: character.lastName,
      dateOfBirth: character.dateOfBirth,
      locationOfBirth: character.locationOfBirth,
      age: character.age,
      species: character.species,
      race: character.race,
      sex: character.sex,
      height: character.height,
      weight: character.weight,
      hairColor: character.hairColor,
      eyeColor: character.eyeColor,
      identifiableMarkings: character.identifiableMarkings,
      origin: character.origin,
      primaryPowers: character.primaryPowers,
      secondaryPowers: character.secondaryPowers,
      tertiaryPowers: character.tertiaryPowers,
      travelPowers: character.travelPowers,
      background: character.background,
      story: character.story
   });
}

export const deleteCharacter = async (id: string) => {
   return await Character.findByIdAndDelete(objectID(id)).exec();
}
