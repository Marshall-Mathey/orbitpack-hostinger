export default class UserMiddleware {
    async handle(ctx, next) {
        const user = ctx.auth.user;
        if (!user) {
            return ctx.response.unauthorized('Utilisateur non authentifié');
        }
        if (user.isAdmin || user.isModerator) {
            return ctx.response.forbidden('Accès interdit: Seuls les agents peuvent accéder à cette ressource.');
        }
        await next();
    }
}
//# sourceMappingURL=user_middleware.js.map