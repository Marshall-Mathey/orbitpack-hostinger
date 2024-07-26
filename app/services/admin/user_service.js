import User from '#app/models/user';
export class UserService {
    async createAdmin(data) {
        return await User.create({ ...data, isAdmin: true });
    }
    async createModerator(data) {
        return await User.create({ ...data, isModerator: true });
    }
    async promoteModerator(id) {
        const user = await this.getUserById(id);
        user.merge({ isModerator: true });
        await user.save();
        return user;
    }
    async createUser(data) {
        const existingUser = await User.query().where('pseudo', data.pseudo).first();
        if (existingUser) {
            throw new Error("L'utilisateur existe déjà.");
        }
        return await User.create({ ...data });
    }
    async getUserById(id) {
        return await User.findOrFail(id);
    }
    async updateUser(id, data) {
        const user = await this.getUserById(id);
        user.merge(data);
        await user.save();
        return user;
    }
    async deleteUser(id) {
        const user = await this.getUserById(id);
        await user.delete();
    }
    async listUsers(page = 1, limit = 20) {
        return User.query()
            .where('is_admin', false)
            .andWhere('is_moderator', false)
            .paginate(page, limit);
    }
}
//# sourceMappingURL=user_service.js.map