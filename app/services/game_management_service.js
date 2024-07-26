import { DateTime } from 'luxon';
import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import GameSchedule from '#models/game_schedule';
export class GameManagementService {
    async getCurrentAvailableGames() {
        const now = DateTime.now().setLocale('en');
        const currentDay = now.weekdayLong.toLowerCase();
        const dayOfWeek = Object.values(DayOfWeekEnum).find((day) => day === currentDay);
        if (!dayOfWeek) {
            throw new Error(`Invalid day of the week: ${currentDay}`);
        }
        const currentTime = now.toFormat('HH:mm:ss');
        const gameSchedules = await GameSchedule.query()
            .where('day_of_week', dayOfWeek)
            .where('startTime', '<=', currentTime)
            .where('endTime', '>', currentTime)
            .preload('game');
        const availableGames = gameSchedules.map((schedule) => schedule.game);
        if (availableGames.length === 0) {
            throw new Error('Aucun jeu disponible pour le moment');
        }
        return availableGames;
    }
}
//# sourceMappingURL=game_management_service.js.map