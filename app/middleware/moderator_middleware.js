export default class ModeratorMiddleware {
    async handle(ctx, next) {
        const user = ctx.auth.user;
        if (!user || (!user.isAdmin && !user.isModerator)) {
            return ctx.response.unauthorized("Accès non autorisé ! Vous n'êtes pas modérateur.");
        }
        await next();
    }
}
//# sourceMappingURL=moderator_middleware.js.map