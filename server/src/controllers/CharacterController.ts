import * as database from "../database";

export const getAllCharacters = async () => {
   try {
      const characters = await database.Characters.getAllCharacters();
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharacterByID = async (id: string) => {
   try {
      const character = await database.Characters.getCharacterByID(id);
      return { error: false, message: character };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharactersByAuthorID = async (id: string) => {
   try {
      const characters = await database.Characters.getCharactersByAuthorID(id);
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharactersByAuthorName = async (name: string) => {
   try {
      const characters = await database.Characters.getCharactersByAuthorName(name);
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharactersByFirstName = async (name: string) => {
   try {
      const characters = await database.Characters.getCharactersByFirstName(name);
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharactersByLastName = async (name: string) => {
   try {
      const characters = await database.Characters.getCharactersByLastName(name);
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getCharactersByAlias = async (name: string) => {
   try {
      const characters = await database.Characters.getCharactersByAlias(name);
      return { error: false, message: characters };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const createCharacter = async (character: any) => {
   try {
      const charID = await database.Characters.createCharacter(character);
      return { error: false, message: charID };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const deleteCharacter = async (id: string) => {
   try {
      await database.Characters.deleteCharacter(id);
      return { error: false, message: "Character deleted." };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const updateCharacter = async (character: any) => {
   try {
      await database.Characters.updateCharacter(character);
      return { error: false, message: "Character updated." };
   } catch (err) {
      return { error: true, message: err };
   }
}