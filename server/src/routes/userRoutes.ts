import * as express from "express";

import * as UserController from "../controllers/UserController";

export const register = ( app: express.Application ) => {
   /**
    * User related API routes
    */
   app.get("/users", async (req, res) => {
      res.send(await UserController.getAllUsers());
   });

   app.get("/users/:id", async (req, res) => {
      res.send(await UserController.getUserByID(req.body.userID));
   });

   // Only those that log in can do this.
   app.post("/users", async (req, res) => {
      res.send(await UserController.createUser(req.body.userName, req.body.password));
   });

    // Only those that log in can do this.
   app.put("/users", async (req, res) => {
      res.send(await UserController.updateUser(req.body.id, req.body.password));
   });

    // Only those that log in can do this and only for themselves.
   app.delete("/users/:id", async (req, res) => {
      res.send(await UserController.deleteUser(req.body.id));
   });
}