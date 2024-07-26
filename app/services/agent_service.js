import Agent from '#app/models/agent';
import { AgentStatusEnum } from '#app/enums/agent_status_enum';
export class AgentService {
    async createAgent(ctx) {
        const { request, response } = ctx;
        const { userId, phone, commissionRate, permOdd, napOdd } = request.only([
            'userId',
            'phone',
            'commissionRate',
            'permOdd',
            'napOdd',
        ]);
        try {
            const agent = await Agent.create({
                userId,
                phone,
                commissionRate,
                permOdd,
                napOdd,
                total_sales: 0,
                total_commission: 0,
                status: AgentStatusEnum.Active,
            });
            const agentResponse = this.mapAgentToResponse(agent);
            return response.created({ data: agentResponse });
        }
        catch (error) {
            return response.badRequest("Echec lors de la création de l'agent.");
        }
    }
    async updateAgent(ctx) {
        const { request, response } = ctx;
        const { id } = request.params();
        const updateData = request.only([
            'phone',
            'commissionRate',
            'permOdd',
            'napOdd',
            'status',
        ]);
        try {
            const agent = await Agent.findOrFail(id);
            agent.merge(updateData);
            await agent.save();
            const agentResponse = this.mapAgentToResponse(agent);
            return response.ok({ data: agentResponse });
        }
        catch (error) {
            return response.notFound('Agent non trouvé.');
        }
    }
    async deleteAgent(ctx) {
        const { request, response } = ctx;
        const { id } = request.params();
        try {
            const agent = await Agent.findOrFail(id);
            await agent.delete();
            return response.noContent();
        }
        catch (error) {
            return response.notFound('Agent non trouvé.');
        }
    }
    async getAgent(ctx) {
        const { request, response } = ctx;
        const { id } = request.params();
        try {
            const agent = await Agent.findOrFail(id);
            const agentResponse = this.mapAgentToResponse(agent);
            return response.ok({ data: agentResponse });
        }
        catch (error) {
            return response.notFound('Agent non trouvé.');
        }
    }
    async listAgents(ctx) {
        const { response } = ctx;
        try {
            const agents = await Agent.query().preload('user');
            const agentsResponse = agents.map((agent) => this.mapAgentToResponse(agent));
            return response.ok({ data: agentsResponse });
        }
        catch (error) {
            return response.badRequest('Echec lors de la récupération des agents.');
        }
    }
    mapAgentToResponse(agent) {
        return {
            id: agent.id,
            userId: agent.userId,
            phone: agent.phone,
            commissionRate: agent.commissionRate,
            permOdd: agent.permOdd,
            napOdd: agent.napOdd,
            total_sales: agent.total_sales,
            total_commission: agent.total_commission,
            status: agent.status,
            createdAt: agent.createdAt.toISODate(),
            updatedAt: agent.updatedAt.toISODate(),
        };
    }
}
//# sourceMappingURL=agent_service.js.map