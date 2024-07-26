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
import { GameManagementService } from '#services/game_management_service';
let GetCurrentAvailableGamesController = class GetCurrentAvailableGamesController {
    gameManagementService;
    constructor(gameManagementService) {
        this.gameManagementService = gameManagementService;
    }
    async handle({ response }) {
        try {
            const games = await this.gameManagementService.getCurrentAvailableGames();
            return response.ok({ data: games.map((game) => game.serialize()) });
        }
        catch (error) {
            return response.badRequest({ error: error.message });
        }
    }
};
GetCurrentAvailableGamesController = __decorate([
    inject(),
    __metadata("design:paramtypes", [GameManagementService])
], GetCurrentAvailableGamesController);
export default GetCurrentAvailableGamesController;
//# sourceMappingURL=get_current_available_games_controller.js.map