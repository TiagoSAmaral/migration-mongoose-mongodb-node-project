/*
* MigrationRepository.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

import mongoose, { AnyBulkWriteOperation, Model } from "mongoose";
import MigrationSchema from "./MigrationSchema";
import IMigration from "./IMigration";

export default class MigrationRepository {

    private readonly repository;
    constructor() {
        this.repository = mongoose.model('Migrations', MigrationSchema);
    }

    list = async (): Promise<IMigration[]> => await this.repository.find().exec();
    
    save = async (item: IMigration): Promise<boolean> => {

        // Criar as operações de update
        const operation: AnyBulkWriteOperation<Model<IMigration>> = {
            updateOne: {
                filter: { name: item.name },
                update: { $set: item },  // Transformar o item em objeto simples se necessário
                upsert: true
            }
        };

        // Executar o bulkWrite com as operações geradas
        const result = await this.repository.collection.bulkWrite(operation);
        return result.isOk();
    };
};