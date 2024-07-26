import { StatusEnum } from '#app/enums/status_enum';
import Bet from '#app/models/bet';
export class AdminBetService {
    async getAllBets(page = 1, limit = 20) {
        return Bet.query().paginate(page, limit);
    }
    async getWinningBetsByUser(userId) {
        return Bet.query().where('userId', userId).where('status', StatusEnum.WON);
    }
    async getBetsByUser(userId, page = 1, limit = 20) {
        return Bet.query().where('userId', userId).paginate(page, limit);
    }
    async getBetsByDate(date, page = 1, limit = 20) {
        return Bet.query()
            .whereBetween('createdAt', [date.startOf('day').toJSDate(), date.endOf('day').toJSDate()])
            .paginate(page, limit);
    }
    async getBetsByStatus(status, page = 1, limit = 20) {
        return Bet.query().where('status', status).paginate(page, limit);
    }
    async getBetsByGame(gameId, page = 1, limit = 20) {
        return Bet.query().where('gameId', gameId).paginate(page, limit);
    }
}
//# sourceMappingURL=bet_service.js.map