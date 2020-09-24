import { Document } from 'mongoose';

export interface IUserDocument extends Document {
    userName: string;
    password: string;
    characters: [];
}