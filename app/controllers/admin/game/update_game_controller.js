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
import { GameService } from '#services/admin/game_service';
let UpdateGameController = class UpdateGameController {
    adminGameService;
    constructor(adminGameService) {
        this.adminGameService = adminGameService;
    }
    async handle(ctx) {
        const { params, request, response } = ctx;
        const { id } = params;
        const data = request.only(['name', 'drawNumber', 'status', 'dayOfWeek']);
        try {
            const game = await this.adminGameService.updateGame(id, data);
            return response.ok({ data: game });
        }
        catch (error) {
            return response.notFound('Jeu non trouvé.');
        }
    }
};
UpdateGameController = __decorate([
    inject(),
    __metadata("design:paramtypes", [GameService])
], UpdateGameController);
export default UpdateGameController;
//# sourceMappingURL=update_game_controller.js.map