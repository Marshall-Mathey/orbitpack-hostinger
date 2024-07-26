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
import { LicenseService } from '#app/services/licence_service';
let LicenseCheckMiddleware = class LicenseCheckMiddleware {
    licenceService;
    constructor(licenceService) {
        this.licenceService = licenceService;
    }
    async handle(ctx, next) {
        const isActive = await this.licenceService.isLicenseActive();
        if (!isActive) {
            return ctx.response.unauthorized({ message: 'La licence est invalide ou expirée. Veuillez contacter le support pour plus d\'informations.' });
        }
        await next();
    }
};
LicenseCheckMiddleware = __decorate([
    inject(),
    __metadata("design:paramtypes", [LicenseService])
], LicenseCheckMiddleware);
export default LicenseCheckMiddleware;
//# sourceMappingURL=license_check_middleware.js.map