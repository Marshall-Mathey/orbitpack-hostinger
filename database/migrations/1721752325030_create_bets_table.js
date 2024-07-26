import { StatusEnum } from '#app/enums/status_enum';
import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'bets';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.integer('game_id').unsigned().references('id').inTable('games').onDelete('CASCADE');
            table.integer('coupon_id').unsigned().references('id').inTable('coupons').onDelete('CASCADE');
            table
                .integer('bet_type_id')
                .unsigned()
                .references('id')
                .inTable('bet_types')
                .onDelete('CASCADE');
            table.json('numbers').notNullable();
            table.decimal('amount', 12, 2).notNullable();
            table.enum('status', Object.values(StatusEnum)).defaultTo(StatusEnum.PENDING);
            table.integer('draw_number').notNullable();
            table.decimal('gain', 12, 2).defaultTo(0);
            table.date('calculated_at').nullable();
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721752325030_create_bets_table.js.map