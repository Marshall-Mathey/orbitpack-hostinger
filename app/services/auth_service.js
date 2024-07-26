import User from '#app/models/user';
import { loginValidator } from '#app/validators/auth';
export class AuthService {
    async login({ request, response }) {
        const { pseudo, password } = await request.validateUsing(loginValidator);
        const user = await User.verifyCredentials(pseudo, password);
        if (!user)
            return response.unauthorized('Identifiants incorrects.');
        const token = await User.accessTokens.create(user);
        return response.ok({
            data: {
                token,
                user,
                role: user.isAdmin ? 'admin' : user.isModerator ? 'moderator' : 'user',
            },
        });
    }
    async logout({ auth }) {
        const user = auth.user;
        await User.accessTokens.delete(user, user.currentAccessToken.identifier);
        return { message: 'Déconnexion...' };
    }
    async me({ auth }) {
        await auth.check();
        return {
            user: auth.user,
        };
    }
}
//# sourceMappingURL=auth_service.js.map