/*
* IMigrationAction.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

export default interface IMigrationAction {
    up?: () => Promise<boolean>;
    down?: () => Promise<void>;
    name?: string;
}