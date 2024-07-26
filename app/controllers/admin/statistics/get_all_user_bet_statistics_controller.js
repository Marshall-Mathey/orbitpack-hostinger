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
let GetAllUserBetStatisticsController = class GetAllUserBetStatisticsController {
    adminStatisticsService;
    constructor(adminStatisticsService) {
        this.adminStatisticsService = adminStatisticsService;
    }
    async handle({ response }) {
        try {
            const statistics = await this.adminStatisticsService.getAllUserBetStatistics();
            return response.ok({ statistics });
        }
        catch (error) {
            return response.badRequest('Echec lors de la récupération des statistiques des paris utilisateurs.');
        }
    }
};
GetAllUserBetStatisticsController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminStatisticsService])
], GetAllUserBetStatisticsController);
export default GetAllUserBetStatisticsController;
//# sourceMappingURL=get_all_user_bet_statistics_controller.js.map