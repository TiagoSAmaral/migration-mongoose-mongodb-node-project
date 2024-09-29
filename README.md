<!--
* README.md 
* nodejsMongooseMongodb 
*
* Created by Tiago Amaral on 29/09/2024. 
* Copyright ©2024 Tiago Amaral. All rights reserved.
-->

# "Migração" para MongoDB usando Mongose

Neste projeto de exemplo, tem uma pequena implementação de alterações que podem ser aplicadas 
ao seu banco de dados MongoDB em produção sem a necessidade de acesso direto ao banco de produção. Todo o processo é controlado via código. 

Toda a implementação está disponível na pasta `src/modules/migration`.

--- 
### Funcionamento
 A lógica do procedimento é baseado na idéia que as alterações devem ocorrer na inicialização 
 da aplicação e somente uma única vez, sendo o processo todo gerenciado via código. 

 Toda a execução ocorre no momento em que o método `execute` da classe `MigrationManager` é invocado no `index.ts` após a inicialização de conexão com o banco de dados.

Basicamente, criamos uma lsita de ações (actions), que se encontra na pasta actions, e buscamos 
a lista de actions já executadas anteriomente. 

 Usamos o nome das migrations para realizar a validação, portanto, não use nomes repetidos. 

 Após executar o método `up` de cada action, ela é salva no banco de dados para previnir que seja executada novamente no futuro.

 No código possui explicações adicionais do funcionamento de cada ação.
