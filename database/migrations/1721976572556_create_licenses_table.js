import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'licenses';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('key', 255).notNullable();
            table.boolean('lifetime').defaultTo(false);
            table.timestamp('expiration').nullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721976572556_create_licenses_table.js.map