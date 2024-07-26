import DailyResult from '#models/daily_result';
import { DateTime } from 'luxon';
export class ResultVerificationService {
    async getDailyResults() {
        const today = DateTime.now().toISODate();
        try {
            const results = await DailyResult.query()
                .whereRaw('DATE(created_at) = DATE(?)', [today])
                .preload('game')
                .exec();
            if (results.length === 0) {
                console.warn('Aucun résultat disponible pour le jour actuel');
                return { message: 'Aucun résultat disponible pour le jour actuel' };
            }
            return results;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des résultats du jour:', error);
            throw new Error('Erreur lors de la récupération des résultats du jour');
        }
    }
}
//# sourceMappingURL=result_verification_service.js.map