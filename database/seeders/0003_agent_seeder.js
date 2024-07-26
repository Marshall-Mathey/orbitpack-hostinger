import { AgentStatusEnum } from '#app/enums/agent_status_enum';
import Agent from '#app/models/agent';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class AgentSeeder extends BaseSeeder {
    async run() {
        await Agent.createMany([
            {
                userId: 1,
                phone: '1234567890',
                commissionRate: 0.1,
                permOdd: 250,
                napOdd: 1250,
                total_sales: 1000,
                total_commission: 100,
                status: AgentStatusEnum.Active,
            },
            {
                userId: 2,
                phone: '0987654321',
                commissionRate: 0.15,
                permOdd: 250,
                napOdd: 1250,
                total_sales: 2000,
                total_commission: 300,
                status: AgentStatusEnum.Inactive,
            },
        ]);
    }
}
//# sourceMappingURL=0003_agent_seeder.js.map