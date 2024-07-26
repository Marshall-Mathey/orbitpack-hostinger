import { BaseSchema } from '@adonisjs/lucid/schema';
import { CouponStatusEnum } from '#app/enums/coupon_status_enum';
export default class extends BaseSchema {
    tableName = 'coupons';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.string('name').notNullable();
            table.enum('status', Object.values(CouponStatusEnum)).defaultTo(CouponStatusEnum.INACTIVE);
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1721752294065_create_coupons_table.js.map