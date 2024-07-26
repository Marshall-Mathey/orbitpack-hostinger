var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from '@adonisjs/core';
import { CouponService } from '#services/coupon_service';
let GetBetsForCouponController = class GetBetsForCouponController {
    couponService;
    constructor(couponService) {
        this.couponService = couponService;
    }
    async handle({ params, response }) {
        try {
            const { couponId } = params;
            if (!couponId) {
                return response.badRequest({ error: 'Coupon ID is required' });
            }
            const coupon = await this.couponService.getBetsForCoupon(Number.parseInt(couponId, 10));
            return response.ok({ data: coupon });
        }
        catch (error) {
            return response.badRequest({ error: error.message });
        }
    }
};
GetBetsForCouponController = __decorate([
    inject(),
    __metadata("design:paramtypes", [CouponService])
], GetBetsForCouponController);
export default GetBetsForCouponController;
//# sourceMappingURL=get_bets_for_coupons_controller.js.map