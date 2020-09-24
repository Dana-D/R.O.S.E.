import { Schema, Model, model } from 'mongoose';

import { ICharacterDocument } from '../interfaces/ICharacterDocument';

export interface ICharacterModel extends Model<ICharacterDocument> {}

export const characterSchema: Schema = new Schema({
   author: { type: String, required: true },
   alias: { type: String, required: true },
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   dateOfBirth: { type: String },
   locationOfBirth: { type: String },
   age: { type: String },
   // Appearance
   species: { type: String },
   race: { type: String },
   sex: { type: String },
   height: { type: String },
   weight: { type: String },
   hairColor: { type: String },
   eyeColor: { type: String },
   identifiableMarkings: { type: String },
   // Powers
   origin: { type: String },
   primaryPowers: { type: String },
   secondaryPowers: { type: String },
   tertiaryPowers: { type: String },
   travelPowers: { type: String },
   // Roleplay
   background: { type: String },
   story: { type: Array }
});

export const Character: ICharacterModel = model<ICharacterDocument, ICharacterModel>('Character', characterSchema);

export default Character;