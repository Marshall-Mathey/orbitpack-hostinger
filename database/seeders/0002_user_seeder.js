import User from '#app/models/user';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
export default class UserSeeder extends BaseSeeder {
    async run() {
        await User.createMany([
            {
                fullName: 'Admin User',
                pseudo: 'admin',
                password: 'admin',
                isAdmin: true,
                isModerator: false,
                createdBy: null,
            },
            {
                fullName: 'Moderator User',
                pseudo: 'moderator',
                password: 'moderator',
                isAdmin: false,
                isModerator: true,
                createdBy: 1,
            },
            {
                fullName: 'Regular User',
                pseudo: 'user1',
                password: 'user',
                isAdmin: false,
                isModerator: false,
                createdBy: 1,
            },
        ]);
    }
}
//# sourceMappingURL=0002_user_seeder.js.map