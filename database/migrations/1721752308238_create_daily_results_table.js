import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'daily_results';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('game_id').unsigned().references('id').inTable('games');
            table.integer('draw_number').unsigned().notNullable().defaultTo(1);
            table.json('winning_numbers').notNullable();
            table.enum('day_of_week', Object.values(DayOfWeekEnum)).notNullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721752308238_create_daily_results_table.js.map