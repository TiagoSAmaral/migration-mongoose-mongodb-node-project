/*
* MIgrationSchema.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

import { Model, Schema } from "mongoose";
import IMigration from "./IMigration";

const MigrationSchema = new Schema<IMigration, Model<IMigration>> ({
    name: String,
    runAt: Date
});

export default MigrationSchema;