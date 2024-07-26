var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { afterFetch, BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm';
import { StatusEnum } from '#app/enums/status_enum';
import BetType from '#models/bet_type';
import Coupon from '#models/coupon';
import Game from '#models/game';
import User from '#models/user';
export default class Bet extends BaseModel {
    static async beforeSaveHook(bet) {
        if (typeof bet.$attributes.numbers !== 'string')
            bet.$attributes.numbers = JSON.stringify(bet.$attributes.numbers);
    }
    static async afterFetchHook(bets) {
        bets.forEach((bet) => {
            if (typeof bet.$attributes.numbers === 'string') {
                bet.$attributes.numbers = JSON.parse(bet.$attributes.numbers);
            }
        });
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Bet.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "userId", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "gameId", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "couponId", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "betTypeId", void 0);
__decorate([
    column({
        prepare: (value) => JSON.stringify(value),
        consume: (value) => JSON.parse(value),
    }),
    __metadata("design:type", Array)
], Bet.prototype, "numbers", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "amount", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Bet.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "drawNumber", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Bet.prototype, "gain", void 0);
__decorate([
    column(),
    __metadata("design:type", Date)
], Bet.prototype, "calculatedAt", void 0);
__decorate([
    belongsTo(() => User),
    __metadata("design:type", Object)
], Bet.prototype, "user", void 0);
__decorate([
    belongsTo(() => Game),
    __metadata("design:type", Object)
], Bet.prototype, "game", void 0);
__decorate([
    belongsTo(() => Coupon),
    __metadata("design:type", Object)
], Bet.prototype, "coupon", void 0);
__decorate([
    belongsTo(() => BetType),
    __metadata("design:type", Object)
], Bet.prototype, "betType", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Bet.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Bet.prototype, "updatedAt", void 0);
__decorate([
    beforeSave(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Bet]),
    __metadata("design:returntype", Promise)
], Bet, "beforeSaveHook", null);
__decorate([
    afterFetch(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Bet, "afterFetchHook", null);
//# sourceMappingURL=bet.js.map