import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import DailyResult from '#app/models/daily_result';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class DailyResultSeeder extends BaseSeeder {
    async run() {
        await DailyResult.createMany([
            {
                gameId: 1,
                drawNumber: 1234,
                winningNumbers: JSON.stringify([1, 2, 3]),
                dayOfWeek: DayOfWeekEnum.MONDAY,
            },
            {
                gameId: 2,
                drawNumber: 5678,
                winningNumbers: JSON.stringify([4, 5, 6]),
                dayOfWeek: DayOfWeekEnum.TUESDAY,
            },
        ]);
    }
}
//# sourceMappingURL=0006_daily_result_seeder.js.map