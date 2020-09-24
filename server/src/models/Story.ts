import { Schema, Model, model } from 'mongoose';

import { IStoryDocument } from '../interfaces/IStoryDocument';

export interface IStoryModel extends Model<IStoryDocument> {}

export const storySchema: Schema = new Schema({
    author: { type: String, required: true },
    character: { type: String, required: true},
    text: { type: String, required: true },
});

export const Story: IStoryModel = model<IStoryDocument, IStoryModel>('story', storySchema);

export default Story;