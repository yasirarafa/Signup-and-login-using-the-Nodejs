import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

export default class UserSchema extends VersionableSchema {
    constructor(option: any) {
        const userSchema = {
            _id: String,
            email: {type: String, unique: true},
            name: String,
            password: String,
            phoneNumber: Number,
        };
        super(userSchema, option);
    }
}
