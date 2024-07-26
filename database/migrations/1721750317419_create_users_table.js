import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').notNullable();
            table.string('full_name').nullable();
            table.string('pseudo').notNullable().unique();
            table.string('password').notNullable();
            table.boolean('is_admin').defaultTo(false);
            table.boolean('is_moderator').defaultTo(false);
            table.integer('created_by').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721750317419_create_users_table.js.map