import Agent from '#models/agent';
import Bet from '#models/bet';
export class FinancialSituationService {
    async getFinancialSituation(agentId) {
        if (!agentId || Number.isNaN(agentId)) {
            throw new Error('Identifiant agent invalide.');
        }
        const agent = await Agent.query().where('user_id', agentId).firstOrFail();
        const totalBets = await Bet.query()
            .where('userId', agentId)
            .sum('amount as totalAmount')
            .firstOrFail();
        const commissionRate = agent.commissionRate || 0.1;
        const totalCommission = totalBets.$extras.totalAmount * commissionRate;
        const bets = await Bet.query().where('userId', agentId).preload('game');
        return {
            agent,
            totalAmount: totalBets.$extras.totalAmount,
            totalCommission,
            bets,
        };
    }
}
//# sourceMappingURL=financial_situation_service.js.map