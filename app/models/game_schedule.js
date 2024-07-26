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
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import { DayOfWeekEnum } from '#app/enums/day_of_week_enum';
import Game from './game.js';
export default class GameSchedule extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], GameSchedule.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], GameSchedule.prototype, "gameId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], GameSchedule.prototype, "dayOfWeek", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], GameSchedule.prototype, "startTime", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], GameSchedule.prototype, "endTime", void 0);
__decorate([
    belongsTo(() => Game),
    __metadata("design:type", Object)
], GameSchedule.prototype, "game", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], GameSchedule.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], GameSchedule.prototype, "updatedAt", void 0);
//# sourceMappingURL=game_schedule.js.map