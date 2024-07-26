var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AdminStatisticsService } from '#services/admin/statistic_service';
import { inject } from '@adonisjs/core';
let GetTotalGamesController = class GetTotalGamesController {
    adminStatisticsService;
    constructor(adminStatisticsService) {
        this.adminStatisticsService = adminStatisticsService;
    }
    async handle({ response }) {
        try {
            const totalGames = await this.adminStatisticsService.getTotalGames();
            return response.ok({ totalGames });
        }
        catch (error) {
            return response.badRequest('Echec de la récupération du nombre total de jeux.');
        }
    }
};
GetTotalGamesController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminStatisticsService])
], GetTotalGamesController);
export default GetTotalGamesController;
//# sourceMappingURL=get_total_games_controller.js.map