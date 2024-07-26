import { StatusEnum } from '#app/enums/status_enum';
import Bet from '#app/models/bet';
import BetType from '#app/models/bet_type';
import DailyResult from '#app/models/daily_result';
export class ResultService {
    async recordDailyResults(dto) {
        const { gameId, drawNumber, winningNumbers } = dto;
        if (!Array.isArray(winningNumbers)) {
            throw new Error('Le résultat du tirage doit être un tableau de nombres.');
        }
        try {
            const dailyResult = await DailyResult.create({
                gameId,
                drawNumber,
                winningNumbers: JSON.stringify(winningNumbers),
            });
            const bets = await Bet.query().where('gameId', gameId).where('status', StatusEnum.PENDING);
            for (const bet of bets) {
                const userNumbers = bet.numbers;
                const betType = await BetType.findOrFail(bet.betTypeId);
                const winningNumbersArray = JSON.parse(dailyResult.winningNumbers);
                const isWinning = this.isWinningBet(userNumbers, winningNumbersArray, betType);
                if (isWinning) {
                    const winAmount = this.calculateWinAmount(userNumbers, winningNumbersArray, betType, bet.amount);
                    bet.status = StatusEnum.WON;
                    bet.gain = winAmount;
                }
                else {
                    bet.status = StatusEnum.LOST;
                }
                await bet.save();
            }
            return {
                dailyResult,
                message: 'Les résultats quotidiens ont été enregistrés et les paris mis à jour avec succès.',
            };
        }
        catch (error) {
            console.error("Erreur lors de l'enregistrement des résultats quotidiens:", error);
            throw new Error("Échec de l'enregistrement des résultats quotidiens");
        }
    }
    isWinningBet(userNumbers, winningNumbers, betType) {
        const minNumbers = this.getMinMatchingNumbers(betType.name);
        const matchedNumbers = userNumbers.filter((number) => winningNumbers.includes(number));
        return matchedNumbers.length >= minNumbers;
    }
    getMinMatchingNumbers(betTypeName) {
        switch (betTypeName) {
            case 'Perm':
                return 2;
            case 'Nap':
                return 3;
            case 'Turning Numbers':
                return 2;
            case 'Tableau':
                return 1;
            default:
                throw new Error(`Type de pari inconnu: ${betTypeName}`);
        }
    }
    calculateWinAmount(userNumbers, winningNumbers, betType, amount) {
        const odds = this.getOdds(betType.name);
        const minNumbers = this.getMinMatchingNumbers(betType.name);
        const matchedNumbersCount = userNumbers.filter((num) => winningNumbers.includes(num)).length;
        const combinations = this.calculateCombinations(matchedNumbersCount, minNumbers);
        return combinations * amount * odds;
    }
    getOdds(betTypeName) {
        switch (betTypeName) {
            case 'Perm':
                return 250;
            case 'Nap':
                return 1250;
            case 'Turning Numbers':
                return 2500 / 37;
            case 'Tableau':
                return 10000 / 89;
            default:
                throw new Error(`Type de pari inconnu: ${betTypeName}`);
        }
    }
    calculateCombinations(totalElements, combinationSize) {
        if (combinationSize > totalElements)
            return 0;
        let result = 1;
        for (let i = 0; i < combinationSize; i++) {
            result *= (totalElements - i) / (i + 1);
        }
        return result;
    }
}
//# sourceMappingURL=result_service.js.map