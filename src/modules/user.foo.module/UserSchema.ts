/*
* UserSchema.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

export interface IUser {
    name: string;
    age: number;
    // Nova propriedade precisa de ser adicionada na interface mas não no Schema de User.
    lastName: String;
}

import { Model, Schema } from "mongoose";

const UserSchema = new Schema<IUser, Model<IUser>> ({
    name: String,
    age: Number
});

export default UserSchema;