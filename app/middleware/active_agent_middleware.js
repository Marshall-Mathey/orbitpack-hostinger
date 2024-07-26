import { AgentStatusEnum } from '#app/enums/agent_status_enum';
import Agent from '#models/agent';
export default class ActiveAgentMiddleware {
    async handle(ctx, next) {
        const user = ctx.auth.user;
        if (!user) {
            return ctx.response.unauthorized('Utilisateur non authentifié');
        }
        if (user.isAdmin || user.isModerator) {
            return next();
        }
        const agent = await Agent.query()
            .where('userId', user.id)
            .where('status', AgentStatusEnum.Active)
            .first();
        if (!agent) {
            return ctx.response.forbidden('Accès interdit: Vous devez être agent actif pour accéder à cette ressource.');
        }
        await next();
    }
}
//# sourceMappingURL=active_agent_middleware.js.map