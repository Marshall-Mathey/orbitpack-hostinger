var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from '@adonisjs/core';
import { ResultVerificationService } from '#services/result_verification_service';
let GetDailyResultsController = class GetDailyResultsController {
    resultVerificationService;
    constructor(resultVerificationService) {
        this.resultVerificationService = resultVerificationService;
    }
    async handle(ctx) {
        const { response } = ctx;
        try {
            const results = await this.resultVerificationService.getDailyResults();
            return response.ok({ data: results });
        }
        catch (error) {
            return response.badRequest('Erreur lors de la récupération des résultats quotidiens.');
        }
    }
};
GetDailyResultsController = __decorate([
    inject(),
    __metadata("design:paramtypes", [ResultVerificationService])
], GetDailyResultsController);
export default GetDailyResultsController;
//# sourceMappingURL=get_daily_results_controller.js.map