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
import { AdminGameScheduleService } from '#services/admin/game_schedule_service';
let DeleteGameScheduleController = class DeleteGameScheduleController {
    adminGameScheduleService;
    constructor(adminGameScheduleService) {
        this.adminGameScheduleService = adminGameScheduleService;
    }
    async handle({ params, response }) {
        const id = params.id;
        try {
            const result = await this.adminGameScheduleService.deleteGameSchedule(id);
            return response.ok(result);
        }
        catch (error) {
            return response.badRequest('Echec de la suppression du planning de jeu.');
        }
    }
};
DeleteGameScheduleController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminGameScheduleService])
], DeleteGameScheduleController);
export default DeleteGameScheduleController;
//# sourceMappingURL=delete_game_schedule_controller.js.map