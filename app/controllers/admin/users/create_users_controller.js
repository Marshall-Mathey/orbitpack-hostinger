var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from '#app/services/admin/user_service';
import { inject } from '@adonisjs/core';
let CreateUserController = class CreateUserController {
    adminUserService;
    constructor(adminUserService) {
        this.adminUserService = adminUserService;
    }
    async handle({ request }) {
        const payload = request.only(['fullName', 'pseudo', 'password']);
        return this.adminUserService.createUser(payload);
    }
};
CreateUserController = __decorate([
    inject(),
    __metadata("design:paramtypes", [UserService])
], CreateUserController);
export default CreateUserController;
//# sourceMappingURL=create_users_controller.js.map