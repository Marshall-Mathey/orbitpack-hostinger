import { StatusEnum } from '#app/enums/status_enum';
import Bet from '#app/models/bet';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class BetSeeder extends BaseSeeder {
    async run() {
        await Bet.createMany([
            {
                userId: 3,
                gameId: 1,
                couponId: 1,
                betTypeId: 1,
                numbers: [1, 2, 3],
                amount: 100,
                status: StatusEnum.PENDING,
                drawNumber: 1234,
                gain: 0,
            },
            {
                userId: 3,
                gameId: 2,
                couponId: 1,
                betTypeId: 1,
                numbers: [4, 5, 6],
                amount: 200,
                status: StatusEnum.WON,
                drawNumber: 5678,
                gain: 2500,
            },
        ]);
    }
}
//# sourceMappingURL=0005_bet_seeder.js.map