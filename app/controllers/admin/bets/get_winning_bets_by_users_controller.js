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
let GetWinningBetsByUserController = class GetWinningBetsByUserController {
    adminBetService;
    constructor(adminBetService) {
        this.adminBetService = adminBetService;
    }
    async handle({ params, response }) {
        const userId = params.userId;
        try {
            const bets = await this.adminBetService.getWinningBetsByUser(userId);
            if (bets.length === 0)
                response.notFound({ message: 'Aucun pari trouvé pour cet utilisateur.' });
            return response.ok({ data: bets });
        }
        catch (error) {
            return response.badRequest('Erreur lors de la récupération des paris gagnants pour cet utilisateur.');
        }
    }
};
GetWinningBetsByUserController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminBetService])
], GetWinningBetsByUserController);
export default GetWinningBetsByUserController;
//# sourceMappingURL=get_winning_bets_by_users_controller.js.map