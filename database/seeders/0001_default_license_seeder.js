import License from '#app/models/license';
import { generateLicenseKey } from '#utils/generate_license_key';
import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { DateTime } from 'luxon';
export default class LicenseSeeder extends BaseSeeder {
    async run() {
        const defaultKey = generateLicenseKey();
        const defaultLifetime = false;
        const expiration = DateTime.now().plus({ weeks: 2 });
        const license = await License.first();
        if (license) {
            license.merge({ key: defaultKey, lifetime: defaultLifetime, expiration });
            await license.save();
        }
        else {
            await License.create({ key: defaultKey, lifetime: defaultLifetime, expiration });
        }
    }
}
//# sourceMappingURL=0001_default_license_seeder.js.map