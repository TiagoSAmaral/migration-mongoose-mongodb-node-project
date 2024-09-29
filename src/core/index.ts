/*
* index.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

import MigrationManager from "../modules/migration/MigrationManager";
import app from "./app";
import mongoose from "mongoose";

const mongodbAddress = process.env.MONGODB_DATABASE_URL as string;

const start = async () => {
    // 1 - Connect to DB
    await mongoose.connect(mongodbAddress);

    // 2 - Perform migration
    await MigrationManager.execute();

    // 3 - Start application
    await app.listen(process.env.NODE_PORT);

}

await start();