import mongoose from "mongoose";

import * as characterDB from "./characterDB";
import * as storyDB from "./storyDB";
import * as UserDB from "./userDB";

mongoose.Promise = global.Promise;mongoose.connect("mongodb+srv://Dana:RWkBP2ad99eRyRY3@datastorage.xcqva.mongodb.net/site?retryWrites=true&w=majority", { useNewUrlParser : true, useUnifiedTopology : true });

export const Characters = characterDB;
export const Stories = storyDB;
export const Users = UserDB;
