import { AgentStatusEnum } from '#app/enums/agent_status_enum';
import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'agents';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.string('phone').notNullable().unique();
            table.integer('commission_rate').notNullable();
            table.integer('perm_odd').nullable();
            table.integer('nap_odd').nullable();
            table.integer('total_sales').notNullable().defaultTo(0);
            table.integer('total_commission').notNullable().defaultTo(0);
            table.enum('status', Object.values(AgentStatusEnum)).defaultTo(AgentStatusEnum.Active);
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721752338688_create_agents_table.js.map