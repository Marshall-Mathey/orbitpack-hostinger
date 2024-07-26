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
let GetUserBetStatisticsController = class GetUserBetStatisticsController {
    adminStatisticsService;
    constructor(adminStatisticsService) {
        this.adminStatisticsService = adminStatisticsService;
    }
    async handle({ params, response }) {
        const userId = params.userId;
        try {
            const statistics = await this.adminStatisticsService.getUserBetStatistics(userId);
            return response.ok({ statistics });
        }
        catch (error) {
            return response.badRequest("Echec lors de la récupération des statistiques des paris de l'utilisateur.");
        }
    }
};
GetUserBetStatisticsController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminStatisticsService])
], GetUserBetStatisticsController);
export default GetUserBetStatisticsController;
//# sourceMappingURL=get_user_bet_statistics_controller.js.map