import { CouponStatusEnum } from '#app/enums/coupon_status_enum';
import Coupon from '#app/models/coupon';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class CouponSeeder extends BaseSeeder {
    async run() {
        await Coupon.createMany([
            {
                userId: 3,
                name: 'Coupon 1',
                status: CouponStatusEnum.ACTIVE,
            },
            {
                userId: 3,
                name: 'Coupon 2',
                status: CouponStatusEnum.EXPIRED,
            },
        ]);
    }
}
//# sourceMappingURL=0004_coupon_seeder.js.map