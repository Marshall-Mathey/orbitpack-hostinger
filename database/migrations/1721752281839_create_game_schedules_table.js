import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'game_schedules';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('game_id').unsigned().references('id').inTable('games').onDelete('CASCADE');
            table.enum('day_of_week', Object.values(DayOfWeekEnum)).notNullable();
            table.time('start_time').notNullable();
            table.time('end_time').notNullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721752281839_create_game_schedules_table.js.map