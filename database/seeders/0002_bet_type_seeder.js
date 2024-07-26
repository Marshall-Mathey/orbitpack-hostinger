import BetType from '#app/models/bet_type';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class BetTypeSeeder extends BaseSeeder {
    async run() {
        await BetType.createMany([
            { name: 'Perm', odds: 250, minNumbers: 2, betLimit: 2000 },
            { name: 'Nap', odds: 1250, minNumbers: 3, betLimit: 500 },
            { name: 'Turning Numbers', odds: 2500 / 37, minNumbers: 2, betLimit: 2000 },
            { name: 'Tableau', odds: 10000 / 89, minNumbers: 1, betLimit: 2000 },
        ]);
    }
}
//# sourceMappingURL=0002_bet_type_seeder.js.map