import Coupon from '#models/coupon';
import { CouponStatusEnum } from '#app/enums/coupon_status_enum';
export default class ValidateCouponController {
    async handle({ params, response }) {
        const couponId = params.id;
        try {
            const coupon = await Coupon.findOrFail(couponId);
            coupon.status = CouponStatusEnum.EXPIRED;
            await coupon.save();
            return response.ok({
                message: 'Le coupon a été validé avec succès.',
                data: coupon.serialize(),
            });
        }
        catch (error) {
            return response.badRequest({ error: error.message });
        }
    }
}
//# sourceMappingURL=validate_coupon_controller.js.map