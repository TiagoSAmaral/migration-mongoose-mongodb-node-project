/*
* addNovoPathAoSchemaUser.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

/*
    Código de exemplo
*/

import ProtoMigrationAction from "../ProtoMigrationAction";
import UserSchema from "../../user.foo.module/UserSchema";

const action = new ProtoMigrationAction();

action.name = "add-departament-field-into-feed-product";

action.up = async (): Promise<boolean> => {
    // A nova propriedade `lastName` também precisa ser adicionada a interface `IUser` para ser devidamente reconhecida.
    UserSchema.add({ lastName: String });
    return true;
};

action.down = async (): Promise<void> => {
    await UserSchema.remove('lastName');
};

export default action;