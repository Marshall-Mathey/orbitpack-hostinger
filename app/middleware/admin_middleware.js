export default class AdminMiddleware {
    async handle(ctx, next) {
        const user = ctx.auth.user;
        if (!user || !user.isAdmin) {
            return ctx.response.unauthorized("Accès non autorisé ! Vous n'êtes pas administrateur.");
        }
        await next();
    }
}
//# sourceMappingURL=admin_middleware.js.map