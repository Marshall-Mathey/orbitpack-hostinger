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
let UpdateBetController = class UpdateBetController {
    betService;
    constructor(betService) {
        this.betService = betService;
    }
    async handle({ params, request, response }) {
        const betId = params.id;
        const data = request.only(['userId', 'gameId', 'betTypeId', 'numbers', 'amount']);
        try {
            const updatedBet = await this.betService.updateBet(betId, data);
            return response.ok({ updatedBet });
        }
        catch (error) {
            return response.badRequest(error.message);
        }
    }
};
UpdateBetController = __decorate([
    inject(),
    __metadata("design:paramtypes", [BetService])
], UpdateBetController);
export default UpdateBetController;
//# sourceMappingURL=update_bets_controller.js.map