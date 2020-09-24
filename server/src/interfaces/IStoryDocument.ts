import { Document } from 'mongoose';

export interface IStoryDocument extends Document {
    author: string;
    character: string;
    text: string;
}