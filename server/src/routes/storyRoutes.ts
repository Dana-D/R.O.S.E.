import * as express from "express";

import * as StoryController from "../controllers/StoryController";

export const register = ( app: express.Application ) => {
   /**
    * Story related API routes
    */
   app.get("/stories", async (req, res) => {
      res.send(await StoryController.getAllStories());
   });

   app.get("/stories/:id", async (req, res) => {
      res.send(await StoryController.getstoryByID(req.body.id));
   });

   app.get("/stories/users/:id", async (req, res) => {
      res.send(await StoryController.getStoryByAuthorID(req.body.id));
   });

   app.get("/stories/characters/:id", async (req, res) => {
      res.send(await StoryController.getStoryByCharacterID(req.body.id));
   });

   // Only those that log in can do this.
   app.post("/stories", async (req, res) => {
      res.send(await StoryController.createStory(req.body.id, req.body.text));
   });

   // Only those that log in can do this.
   app.put("/stories/:id", async (req, res) => {
      res.send(await StoryController.updateStory(req.body.id, req.body.text));
   });

   // Only those that log in can do this.
   app.delete("/stories/:id", async (req, res) => {
      res.send(await StoryController.deleteStory(req.body.id));
   });
}