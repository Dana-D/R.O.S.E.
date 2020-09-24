import * as express from "express";

import * as CharacterController from "../controllers/CharacterController";

export const register = ( app: express.Application ) => {
   /**
    * Character related API routes
    */
   app.get("/characters", async (req, res) => {
      res.send(await CharacterController.getAllCharacters());
   });

   app.put("/characters", async (req, res) => {
      res.send(await CharacterController);
   })
}