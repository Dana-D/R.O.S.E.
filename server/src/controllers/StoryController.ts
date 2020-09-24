import * as database from "../database";

export const getAllStories = async () => {
   try {
      const stories = await database.Stories.getAllStories();
      return { error: false, message: stories };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getstoryByID = async (id: string) => {
   try {
      const stories = await database.Stories.getStoryByID(id);
      return { error: false, message: stories };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getStoryByAuthorID = async (id: string) => {
   try {
      const stories = await database.Stories.getStoriesByAuthorID(id);
      return { error: false, message: stories };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const getStoryByCharacterID = async (id: string) => {
   try {
      const stories = await database.Stories.getStoriesByCharacterID(id);
      return { error: false, message: stories };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const createStory = async (id: string, text: string) => {
   try {
      const storyID = await database.Stories.createStory(id, text);
      return { error: false, message: storyID };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const deleteStory = async (id: string) => {
   try {
      await database.Stories.deleteStory(id);
      return { error: false, message: "Story deleted." };
   } catch (err) {
      return { error: true, message: err };
   }
}

export const updateStory = async (id: string, text: string) => {
   try {
      await database.Stories.updateStory(id, text);
      return { error: false, message: "Story updated." };
   } catch (err) {
      return { error: true, message: err };
   }
}