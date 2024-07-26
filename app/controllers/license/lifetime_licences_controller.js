var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LicenseService } from '#app/services/licence_service';
import { inject } from '@adonisjs/core';
let LifetimeLicenceController = class LifetimeLicenceController {
    licenseService;
    constructor(licenseService) {
        this.licenseService = licenseService;
    }
    async handle({ response }) {
        await this.licenseService.activateLicense(true);
        return response.ok({ message: 'Licence activée avec succès.' });
    }
};
LifetimeLicenceController = __decorate([
    inject(),
    __metadata("design:paramtypes", [LicenseService])
], LifetimeLicenceController);
export default LifetimeLicenceController;
//# sourceMappingURL=lifetime_licences_controller.js.map