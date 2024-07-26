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
let UpdateGameScheduleController = class UpdateGameScheduleController {
    adminGameScheduleService;
    constructor(adminGameScheduleService) {
        this.adminGameScheduleService = adminGameScheduleService;
    }
    async handle({ params, request, response }) {
        const id = params.id;
        const data = request.only([
            'gameId',
            'dayOfWeek',
            'startTime',
            'endTime',
        ]);
        try {
            const schedule = await this.adminGameScheduleService.updateGameSchedule(id, data);
            return response.ok({ data: schedule });
        }
        catch (error) {
            return response.badRequest('Failed to update game schedule.');
        }
    }
};
UpdateGameScheduleController = __decorate([
    inject(),
    __metadata("design:paramtypes", [AdminGameScheduleService])
], UpdateGameScheduleController);
export default UpdateGameScheduleController;
//# sourceMappingURL=update_game_schedule_controller.js.map