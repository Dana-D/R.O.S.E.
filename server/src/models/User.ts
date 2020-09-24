import bcrypt from 'bcrypt';
import { Schema, Model, model } from 'mongoose';

import { IUserDocument } from '../interfaces/IUserDocument';

export interface IUserModel extends Model<IUserDocument> {}

export const userSchema: Schema = new Schema({
    // email: { type: String, index: { unique: true }, required: true },
    userName: { type: String, index: { unique: true }, required: true },
    password: { type: String, required: true },
    characters: { type: Array, required: false }
});

userSchema.method('comparePassword', function (password: string): boolean {
    if (bcrypt.compareSync(password, this.password)) return true;
    return false;
});

userSchema.static('hashPassword', (password: string): string => {
    return bcrypt.hashSync(password, 10);
});

export const User: IUserModel = model<IUserDocument, IUserModel>('User', userSchema);

export default User;