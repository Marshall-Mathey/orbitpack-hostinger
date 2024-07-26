import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import Game from '#app/models/game';
import GameSchedule from '#app/models/game_schedule';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { DateTime } from 'luxon';
export default class GameSeeder extends BaseSeeder {
    async run() {
        const games = [
            { name: 'Lotto Diamant', day: DayOfWeekEnum.MONDAY, time: '13:00' },
            { name: 'Loto Gold', day: DayOfWeekEnum.MONDAY, time: '18:00' },
            { name: 'Loto Cash', day: DayOfWeekEnum.TUESDAY, time: '11:00' },
            { name: 'Loto Boom', day: DayOfWeekEnum.TUESDAY, time: '18:00' },
            { name: 'Loto Benz', day: DayOfWeekEnum.WEDNESDAY, time: '13:00' },
            { name: 'Loto Prestige', day: DayOfWeekEnum.WEDNESDAY, time: '18:00' },
            { name: 'Loto Million', day: DayOfWeekEnum.THURSDAY, time: '13:00' },
            { name: 'Loto Super', day: DayOfWeekEnum.THURSDAY, time: '18:00' },
            { name: 'Loto Kadoo', day: DayOfWeekEnum.FRIDAY, time: '13:00' },
            { name: 'Loto King', day: DayOfWeekEnum.FRIDAY, time: '18:00' },
            { name: 'Loto Sam', day: DayOfWeekEnum.SATURDAY, time: '13:00' },
            { name: 'Loto Bingo', day: DayOfWeekEnum.SATURDAY, time: '18:00' },
        ];
        for (const game of games) {
            const createdGame = await Game.create({
                name: game.name,
                drawNumber: 1,
            });
            const startTime = DateTime.fromFormat(game.time, 'HH:mm');
            const endTime = startTime.plus({ hours: 4, minutes: 55 });
            await GameSchedule.create({
                gameId: createdGame.id,
                dayOfWeek: game.day,
                startTime: startTime.toFormat('HH:mm'),
                endTime: endTime.toFormat('HH:mm'),
            });
        }
    }
}
//# sourceMappingURL=0003_game_seeder.js.map