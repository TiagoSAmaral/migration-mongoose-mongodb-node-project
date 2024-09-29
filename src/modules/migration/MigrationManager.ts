/*
* MigrationManager.ts 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
*/

import IMigration from "./IMigration";
import IMigrationAction from "./IMigrationAction";
import MigrationRepository from "./MigrationRepository";
import ProtoMigration from "./ProtoMigration";
import addNovoPathAoSchemaUser from "./actions/addNovoPathAoSchemaUser";

export default class MigrationManager {

    private static repository: MigrationRepository = new MigrationRepository();

    static execute = async () => {

        // 1 - Aqui você adiciona as instâncias das migrações criadas na pasta `actions`.
        const actions: IMigrationAction[] = [addNovoPathAoSchemaUser];

        // 2 - Busca no banco migrações préviamente executadas. Essa lista será usada para verificar se a migração na lista `actions` já foi executada ou não.
        const oldMigrations: IMigration[] = await this.repository?.list();

        // 3 - Pega somente os nomes, que será usados para verificação.
        const oldMigrationNames = oldMigrations.flatMap( item => item.name );

        // 4 - Percorre a lista de ações.
        actions.forEach(async (action) => {

            // 5 - Para cada ação é feita a executao e salvamento no banco para indicar que a ação já foi executada.
            this.applyAndSaveMigration(action, oldMigrationNames);
        });
    };

    private static executeUpOrDown = async (migration: IMigrationAction) => {

        // 1 - Verifica se método `up` foi definido na ação. Caso não interrompe execução.
        if (migration.up == undefined) {
            return;
        };

        // 2 - Caso método `up` seja executado, pegamos o resultado da operação.
        const isSuccess = await migration.up();

        // 3 - Se o método `up` com algum problema, e o método down seja definido, então executamos o método down a fim de desfazer qualquer alteração feita pelo método `up`.
        if (!isSuccess && migration.down !== undefined) {
            await migration.down();
        };
    };

    private static applyAndSaveMigration = async (action: IMigrationAction, oldMigrationNames: string[]) => {
        // 1 - Recebemos a `action` e a lista das actions que foram executadas anteriomente. 
        // Caso o nome esteja na lista ou a propriedade `name` da `action` não esteja definido, não executamos a alteração.
        if (action.name !== undefined && !oldMigrationNames.includes(action.name)) {

            // 2 - Realiza a execução da migration.
            await this.executeUpOrDown(action);

            // 3 - Registra execução da migration.
            await this.repository?.save(new ProtoMigration(action.name, new Date()));
        }
    }
}