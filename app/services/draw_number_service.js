import Game from '#models/game';
import { DateTime } from 'luxon';
export class DrawNumberService {
    async getLastDrawNumber(gameId) {
        await Game.findOrFail(gameId);
        const lastDrawNumber = await Game.query()
            .where('id', gameId)
            .orderBy('drawNumber', 'desc')
            .select('drawNumber')
            .first();
        return lastDrawNumber?.drawNumber ?? 0;
    }
    async incrementDrawNumber(gameId) {
        const lastDrawNumber = await this.getLastDrawNumber(gameId);
        const newDrawNumber = lastDrawNumber + 1;
        await Game.query().where('id', gameId).update({ drawNumber: newDrawNumber });
        return newDrawNumber;
    }
    async updateDrawNumbersForGames() {
        const now = DateTime.now();
        const currentDay = now.weekday;
        const currentTime = now.toFormat('HH:mm:ss');
        const games = await Game.query().whereExists(() => {
            return Game.query()
                .select('*')
                .from('game_schedules')
                .whereRaw('game_schedules.game_id = games.id')
                .whereRaw('game_schedules.day_of_week = ?', [currentDay])
                .whereRaw('game_schedules.start_time <= ?', [currentTime])
                .whereRaw('game_schedules.end_time > ?', [currentTime]);
        });
        for (const game of games) {
            await this.incrementDrawNumber(game.id);
        }
    }
}
//# sourceMappingURL=draw_number_service.js.map