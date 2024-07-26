import Coupon from '#models/coupon';
import Bet from '#models/bet';
export class CouponService {
    async getCouponDetails(couponId) {
        return await Coupon.query().where('id', couponId).preload('bets').firstOrFail();
    }
    async getCouponsByUserId(userId) {
        return Coupon.query().where('user_id', userId).preload('bets').exec();
    }
    async getUserCoupons(userId) {
        return Coupon.query().where('user_id', userId);
    }
    async getBetsForCoupon(couponId) {
        return Bet.query().where('couponId', couponId);
    }
}
//# sourceMappingURL=coupon_service.js.map