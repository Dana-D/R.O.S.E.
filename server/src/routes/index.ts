import * as express from "express";

import * as characterRoutes from "./characterRoutes";
import * as storyRoutes from "./storyRoutes";
import * as userRoutes from "./userRoutes";

export const register = ( app: express.Application ) => {

   characterRoutes.register(app);
   storyRoutes.register(app);
   userRoutes.register(app);

   /**
    * Site usage related API routes
    */
   app.get("/", async (req, res) => {
      res.send({ error: false, message: "R.O.S.E. Server is online." });
   });

   app.post("/login", async (req, res) => {
      // Handle logging in here
   });

   app.post("/logout", async (req, res) => {
      // Handle logging out here
   });
}