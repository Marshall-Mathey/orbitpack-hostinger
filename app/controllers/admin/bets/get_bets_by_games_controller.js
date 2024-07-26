var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AdminBetService } from '#app/services/admin/bet_service';
import { inject } from '@adonisjs/core';
let GetBetsByGameController = class GetBetsByGameController {
    adminBetService;
    constructor(adminBetService) {
        this.adminBetService = adminBetService;
    }
    async handle({ params, request, response }) {
        const gameId = params.gameId;
        const page = request.input('page', 1);
        const limit = request.input('limit', 20);
        try {
            const bets = await this.adminBetService.getBetsByGame(gameId, page, limit);
            return response.ok({ data: bets });
        }
        catch (error) {
            return response.badRequest('Erreur lors de la récupération des paris en fonction du jeu.');
        }
    }
};
GetBetsByGameController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminBetService])
], GetBetsByGameController);
export default GetBetsByGameController;
//# sourceMappingURL=get_bets_by_games_controller.js.map