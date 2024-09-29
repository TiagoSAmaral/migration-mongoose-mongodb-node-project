<!--
* README.md 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
-->

# Actions 

 As actions são as ações das migrações (alterações desejadas na sua base de dados). 

 Basta criar um novo arquivo, e implementar as alterações desejadas numa instância de ProtoMigrationAction.
 Exemplo: 

 ```typescript
const action: IMigrationAction = new ProtoMigrationAction();

action.name = "add-schema-version-field-into-feed-product";

action.up = async (): Promise<boolean> => {
    
    // Ações de alteração.
    return true;
};

action.down = async (): Promise<void> => {
   
   // Regressão caso a operação up falhe.
};

export default action;

 ```