import { StatusEnum } from '#app/enums/status_enum';
import db from '@adonisjs/lucid/services/db';
import { DateTime } from 'luxon';
export class AdminStatisticsService {
    async getTotalBets() {
        const result = await db.rawQuery('SELECT COUNT(*) as total FROM bets');
        return Number(result[0][0].total);
    }
    async getBetsByStatus(status) {
        const result = await db.rawQuery('SELECT COUNT(*) as total FROM bets WHERE status = ?', [
            status,
        ]);
        return Number(result[0][0].total);
    }
    async getBetTypeDistribution() {
        const result = await db.rawQuery('SELECT bet_type_id, COUNT(*) as total FROM bets GROUP BY bet_type_id');
        return result[0];
    }
    async getTotalGames() {
        const result = await db.rawQuery('SELECT COUNT(*) as total FROM games');
        return Number(result[0][0].total);
    }
    async getGameTypeDistribution() {
        const result = await db.rawQuery('SELECT name, COUNT(*) as total FROM games GROUP BY name');
        return result[0];
    }
    async getDailyResultsStatistics() {
        const now = DateTime.now();
        const startOfWeek = now.startOf('week');
        const endOfWeek = now.endOf('week');
        const result = await db.rawQuery('SELECT day_of_week, COUNT(*) as total FROM daily_results WHERE created_at BETWEEN ? AND ? GROUP BY day_of_week', [startOfWeek, endOfWeek]);
        return result[0];
    }
    async getUserBetStatistics(userId) {
        const totalBetsResult = await db.rawQuery('SELECT COUNT(*) as total FROM bets WHERE user_id = ?', [userId]);
        const wonBetsResult = await db.rawQuery('SELECT COUNT(*) as total FROM bets WHERE user_id = ? AND status = ?', [userId, StatusEnum.WON]);
        const lostBetsResult = await db.rawQuery('SELECT COUNT(*) as total FROM bets WHERE user_id = ? AND status = ?', [userId, StatusEnum.LOST]);
        return {
            totalBets: Number(totalBetsResult[0][0].total),
            wonBets: Number(wonBetsResult[0][0].total),
            lostBets: Number(lostBetsResult[0][0].total),
        };
    }
    async getAllUserBetStatistics() {
        const result = await db.rawQuery('SELECT user_id, COUNT(*) as total_bets, ' +
            'SUM(CASE WHEN status = ? THEN 1 ELSE 0 END) as won_bets, ' +
            'SUM(CASE WHEN status = ? THEN 1 ELSE 0 END) as lost_bets ' +
            'FROM bets GROUP BY user_id', [StatusEnum.WON, StatusEnum.LOST]);
        return result[0];
    }
}
//# sourceMappingURL=statistic_service.js.map