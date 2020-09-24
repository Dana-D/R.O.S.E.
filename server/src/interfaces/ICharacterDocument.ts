import { Document } from 'mongoose';

export interface ICharacterDocument extends Document {
   author: string,
   alias: string,
   firstName: string,
   lastName: string,
   dateOfBirth: string,
   locationOfBirth: string,
   age: string,
   // Appearance
   species: string,
   race: string,
   sex: string,
   height: string,
   weight: string,
   hairColor: string,
   eyeColor: string,
   identifiableMarkings: string,
   // Powers
   origin: string,
   primaryPowers: string,
   secondaryPowers: string,
   tertiaryPowers: string,
   travelPowers: string,
   // Roleplay
   background: string,
   story: []
}