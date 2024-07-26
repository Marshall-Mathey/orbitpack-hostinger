import GameSchedule from '#app/models/game_schedule';
export class AdminGameScheduleService {
    async getAllGameSchedules(page = 1, limit = 20) {
        return GameSchedule.query().paginate(page, limit);
    }
    async getSchedulesByGame(gameId) {
        return GameSchedule.query().where('gameId', gameId).exec();
    }
    async createGameSchedule(data) {
        return GameSchedule.create(data);
    }
    async updateGameSchedule(id, data) {
        const schedule = await GameSchedule.findOrFail(id);
        schedule.merge(data);
        await schedule.save();
        return schedule;
    }
    async deleteGameSchedule(id) {
        const schedule = await GameSchedule.findOrFail(id);
        await schedule.delete();
        return { message: 'Horaire de jeu supprimé avec succès.' };
    }
}
//# sourceMappingURL=game_schedule_service.js.map