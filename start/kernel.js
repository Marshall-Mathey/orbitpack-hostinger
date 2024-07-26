import router from '@adonisjs/core/services/router';
import server from '@adonisjs/core/services/server';
server.errorHandler(() => import('#exceptions/handler'));
server.use([
    () => import('#middleware/container_bindings_middleware'),
    () => import('#middleware/force_json_response_middleware'),
    () => import('@adonisjs/cors/cors_middleware'),
]);
router.use([
    () => import('@adonisjs/core/bodyparser_middleware'),
    () => import('@adonisjs/auth/initialize_auth_middleware'),
]);
export const middleware = router.named({
    licenseCheck: () => import('#middleware/license_check_middleware'),
    user: () => import('#middleware/user_middleware'),
    activeAgent: () => import('#middleware/active_agent_middleware'),
    moderator: () => import('#middleware/moderator_middleware'),
    admin: () => import('#middleware/admin_middleware'),
    auth: () => import('#middleware/auth_middleware'),
});
//# sourceMappingURL=kernel.js.map