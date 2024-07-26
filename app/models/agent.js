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
import { AgentStatusEnum } from '#app/enums/agent_status_enum';
import User from './user.js';
export default class Agent extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Agent.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "userId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Agent.prototype, "phone", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "commissionRate", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "permOdd", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "napOdd", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "total_sales", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Agent.prototype, "total_commission", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Agent.prototype, "status", void 0);
__decorate([
    belongsTo(() => User),
    __metadata("design:type", Object)
], Agent.prototype, "user", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Agent.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Agent.prototype, "updatedAt", void 0);
//# sourceMappingURL=agent.js.map