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
let GetCouponsByUserIdController = class GetCouponsByUserIdController {
    couponService;
    constructor(couponService) {
        this.couponService = couponService;
    }
    async handle({ params, response }) {
        try {
            const { userId } = params;
            const coupon = await this.couponService.getCouponsByUserId(Number.parseInt(userId, 10));
            return response.ok({ data: coupon });
        }
        catch (error) {
            return response.badRequest({ error: error.message });
        }
    }
};
GetCouponsByUserIdController = __decorate([
    inject(),
    __metadata("design:paramtypes", [CouponService])
], GetCouponsByUserIdController);
export default GetCouponsByUserIdController;
//# sourceMappingURL=get_coupons_by_user_ids_controller.js.map