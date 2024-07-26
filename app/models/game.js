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
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm';
import GameSchedule from './game_schedule.js';
import DailyResult from '#models/daily_result';
import BetType from './bet_type.js';
export default class Game extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Game.prototype, "betTypeId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Game.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Game.prototype, "drawNumber", void 0);
__decorate([
    hasOne(() => GameSchedule),
    __metadata("design:type", Object)
], Game.prototype, "gameSchedule", void 0);
__decorate([
    hasMany(() => BetType),
    __metadata("design:type", Object)
], Game.prototype, "betTypes", void 0);
__decorate([
    hasMany(() => DailyResult),
    __metadata("design:type", Object)
], Game.prototype, "results", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Game.prototype, "status", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Game.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Game.prototype, "updatedAt", void 0);
//# sourceMappingURL=game.js.map