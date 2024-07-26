import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import { StatusEnum } from '#app/enums/status_enum';
import Bet from '#app/models/bet';
import Coupon from '#app/models/coupon';
import Game from '#app/models/game';
import GameSchedule from '#app/models/game_schedule';
import { DateTime } from 'luxon';
import { CouponStatusEnum } from '#app/enums/coupon_status_enum';
import BetType from '#models/bet_type';
export class BetService {
    async createBet(data) {
        await this.validateBet(data);
        const isGameAvailable = await this.checkGameAvailability(data.gameId);
        if (!isGameAvailable) {
            throw new Error("Le jeu n'est pas disponible à cette heure");
        }
        const coupon = await Coupon.firstOrCreate({
            userId: data.userId,
            status: CouponStatusEnum.ACTIVE,
            name: `Coupon de ${data.userId} - ${DateTime.local().toISODate()}`,
        });
        const bet = await Bet.create({
            ...data,
            couponId: coupon.id,
            status: StatusEnum.PENDING,
            drawNumber: await this.getCurrentDrawNumber(data.gameId),
        });
        return { couponId: coupon.id, bet };
    }
    async getActiveCouponBets(userId) {
        const coupon = await Coupon.query()
            .where('userId', userId)
            .andWhere('status', CouponStatusEnum.ACTIVE)
            .first();
        if (!coupon) {
            throw new Error('Aucun coupon actif trouvé pour cet utilisateur');
        }
        return Bet.query().where('couponId', coupon.id).andWhere('status', StatusEnum.PENDING).exec();
    }
    async updateBet(betId, data) {
        const bet = await Bet.findOrFail(betId);
        const coupon = await Coupon.findOrFail(bet.couponId);
        if (coupon.status !== CouponStatusEnum.ACTIVE) {
            throw new Error('Le coupon a été validé et les paris ne peuvent plus être modifiés');
        }
        if (bet.status !== StatusEnum.PENDING) {
            throw new Error('Le pari ne peut pas être modifié car il n\'est pas en statut "PENDING"');
        }
        await this.validateBet(data);
        const isGameAvailable = await this.checkGameAvailability(data.gameId);
        if (!isGameAvailable) {
            throw new Error("Le jeu n'est pas disponible à cette heure");
        }
        bet.merge({
            ...data,
            drawNumber: data.drawNumber ?? (await this.getCurrentDrawNumber(data.gameId)),
        });
        await bet.save();
        return bet;
    }
    async validateBet(data) {
        const betTypes = await BetType.all();
        const betType = betTypes.find((bt) => bt.id === data.betTypeId);
        if (!betType) {
            throw new Error('Type de pari invalide');
        }
        if (data.numbers.length < betType.minNumbers) {
            throw new Error(`Minimum de ${betType.minNumbers} nombres requis pour le type de pari ${betType.name}`);
        }
        if (data.amount > betType.betLimit) {
            throw new Error(`Le montant misé (${data.amount}) dépasse la limite autorisée (${betType.betLimit}) pour le type de pari ${betType.name}`);
        }
        return true;
    }
    async checkGameAvailability(gameId) {
        const now = DateTime.now().setLocale('en');
        const currentDay = now.weekdayLong.toLowerCase();
        const currentTime = now.toFormat('HH:mm:ss');
        const dayOfWeek = Object.values(DayOfWeekEnum).find((day) => day === currentDay);
        if (!dayOfWeek) {
            throw new Error(`Jour de la semaine invalide: ${currentDay}`);
        }
        const gameSchedule = await GameSchedule.query()
            .where('gameId', gameId)
            .where('day_of_week', dayOfWeek)
            .where('start_time', '<=', currentTime)
            .where('end_time', '>', currentTime)
            .first();
        return !!gameSchedule;
    }
    async getCurrentDrawNumber(gameId) {
        const game = await Game.findOrFail(gameId);
        return game.drawNumber;
    }
}
//# sourceMappingURL=bet_service.js.map