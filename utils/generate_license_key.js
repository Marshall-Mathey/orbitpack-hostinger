import { randomBytes } from 'node:crypto';
export function generateLicenseKey() {
    const key = randomBytes(16).toString('hex');
    return key;
}
//# sourceMappingURL=generate_license_key.js.map