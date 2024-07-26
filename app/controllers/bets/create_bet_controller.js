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
import { BetService } from '#services/bet_service';
let CreateBetController = class CreateBetController {
    betService;
    constructor(betService) {
        this.betService = betService;
    }
    async handle({ request, response }) {
        const data = request.only([
            'userId',
            'gameId',
            'betTypeId',
            'numbers',
            'amount',
        ]);
        try {
            const { couponId, bet } = await this.betService.createBet(data);
            return response.created({ data: { couponId, bet: bet.serialize() } });
        }
        catch (error) {
            return response.badRequest({ error: error.message });
        }
    }
};
CreateBetController = __decorate([
    inject(),
    __metadata("design:paramtypes", [BetService])
], CreateBetController);
export default CreateBetController;
//# sourceMappingURL=create_bet_controller.js.map