import * as database from "../database";

export const getAllUsers = async () => {
   try {
      const userList: string[] = [];
      const users = await database.Users.getAllUsers();
      for (const user of users){
         userList.push(user.userName);
      }
      return { error: false, message: userList };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getUserByID = async (id: string) => {
   try {
      const user = await database.Users.getUserByID(id);
      return { error: false, message: user.userName };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getUserByName = async (name: string) => {
   try {
      const user = await database.Users.getUserByUserName(name);
      return { error: false, message: user.userName };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const createUser = async (userName: string, password: string) => {
   try {
      const userID = await database.Users.getUserByUserName(userName);
      if(userID) {
         return { error: true, message: "User already exists." };
      } else {
         const newUserID = await database.Users.createUser(userName, password)
         return { error: false, message: newUserID };
      }
   } catch (err) {
      return { error: true, message: err };
   }
}

export const deleteUser = async (id: string) => {
   try {
      const stories = await database.Stories.getStoriesByAuthorID(id);
      const characters = await database.Characters.getCharactersByAuthorID(id);
      for (const story of stories) {
         await database.Stories.deleteStory(story.id);
      }
      for (const character of characters) {
         await database.Characters.deleteCharacter(character.id);
      }
      await database.Users.deleteUser(id);
      return { error: false, message: "User deleted." };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const updateUser = async (id: string, password: string) => {
   try {
      await database.Users.updateUser(id, password)
      return { error: false, message: "Character updated." };
   } catch (err) {
      return { error: true, message: err };
   }
}