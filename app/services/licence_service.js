import License from '#app/models/license';
import { generateLicenseKey } from '#utils/generate_license_key';
import { DateTime } from 'luxon';
export class LicenseService {
    async activateLicense(lifetime) {
        const expiration = lifetime
            ? DateTime.fromISO('9999-12-31T23:59:59.999Z')
            : DateTime.now().plus({ days: 30 });
        const licenseKey = generateLicenseKey();
        let license = await License.first();
        if (license) {
            license.merge({ key: licenseKey, lifetime, expiration });
            await license.save();
        }
        else {
            license = await License.create({ key: licenseKey, lifetime, expiration });
        }
        return license;
    }
    async activateDefaultLicense() {
        const defaultKey = generateLicenseKey();
        const defaultLifetime = false;
        const expiration = DateTime.now().plus({ weeks: 2 });
        let license = await License.first();
        if (license) {
            license.merge({ key: defaultKey, lifetime: defaultLifetime, expiration });
            await license.save();
        }
        else {
            license = await License.create({ key: defaultKey, lifetime: defaultLifetime, expiration });
        }
        return license;
    }
    async isLicenseActive() {
        const license = await License.first();
        return license ? license.isActive() : false;
    }
}
//# sourceMappingURL=licence_service.js.map