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
let GetAllGameSchedulesController = class GetAllGameSchedulesController {
    adminGameScheduleService;
    constructor(adminGameScheduleService) {
        this.adminGameScheduleService = adminGameScheduleService;
    }
    async handle({ request, response }) {
        const page = request.input('page', 1);
        const limit = request.input('limit', 20);
        try {
            const gameSchedules = await this.adminGameScheduleService.getAllGameSchedules(page, limit);
            return response.ok({ data: gameSchedules });
        }
        catch (error) {
            return response.badRequest('Erreur lors de la récupération des plannings.');
        }
    }
};
GetAllGameSchedulesController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminGameScheduleService])
], GetAllGameSchedulesController);
export default GetAllGameSchedulesController;
//# sourceMappingURL=get_all_game_schedules_controller.js.map