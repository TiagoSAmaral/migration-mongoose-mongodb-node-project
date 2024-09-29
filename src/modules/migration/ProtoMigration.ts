/*
* ProtoMigration.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

import IMigration from "./IMigration";

export default class ProtoMigration implements IMigration {
    name: string;
    runAt: Date;

    constructor(name: string, runAt: Date) {
        this.name = name;
        this.runAt = runAt;
    }
}