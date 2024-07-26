const LifetimeLicenceController = () => import('#app/controllers/license/lifetime_licences_controller');
import { middleware } from '#start/kernel';
const CreateAdminController = () => import('#controllers/admin/users/create_admins_controller');
import router from '@adonisjs/core/services/router';
const DefaultLicenseActivationController = () => import('#controllers/license/license_activations_controller');
const LoginController = () => import('#controllers/auth/login_controller');
const GetCurrentAvailableGamesController = () => import('#controllers/game/get_current_available_games_controller');
const LogoutController = () => import('#controllers/auth/logout_controller');
const MeController = () => import('#controllers/auth/me_controller');
const CreateBetController = () => import('#controllers/bets/create_bet_controller');
const GetActiveCouponBetsController = () => import('#controllers/bets/get_active_coupon_bets_controller');
const UpdateBetController = () => import('#controllers/bets/update_bets_controller');
const ValidateCouponController = () => import('#controllers/bets/validate_coupon_controller');
const GetBetsForCouponController = () => import('#controllers/coupon/get_bets_for_coupons_controller');
const GetCouponDetailsController = () => import('#controllers/coupon/get_coupon_details_controller');
const GetCouponsByUserIdController = () => import('#controllers/coupon/get_coupons_by_user_ids_controller');
const CreateUserController = () => import('#controllers/admin/users/create_users_controller');
const ListUsersController = () => import('#controllers/admin/users/list_users_controller');
const ListAgentsController = () => import('#controllers/admin/agents/list_agents_controller');
const GetAgentController = () => import('#controllers/admin/agents/get_agent_controller');
const ListGamesController = () => import('#controllers/admin/game/list_games_controller');
const GetGameController = () => import('#controllers/admin/game/get_game_controller');
const GetAllGameSchedulesController = () => import('#controllers/admin/game_schedules/get_all_game_schedules_controller');
const GetSchedulesByGameController = () => import('#controllers/admin/game_schedules/get_schedules_by_game_controller');
const GetAllBetsController = () => import('#controllers/admin/bets/get_all_bets_controller');
const GetWinningBetsByUserController = () => import('#controllers/admin/bets/get_winning_bets_by_users_controller');
const GetBetsByUserController = () => import('#controllers/admin/bets/get_bets_by_users_controller');
const GetBetsByDateController = () => import('#controllers/admin/bets/get_bets_by_dates_controller');
const GetBetsByStatusController = () => import('#controllers/admin/bets/get_bets_by_statuses_controller');
const GetBetsByGameController = () => import('#controllers/admin/bets/get_bets_by_games_controller');
const GetDailyResultsController = () => import('#controllers/results/get_daily_results_controller');
const GetTotalBetsController = () => import('#controllers/admin/statistics/get_total_bets_controller');
const GetBetTypeDistributionController = () => import('#controllers/admin/statistics/get_bet_type_distribution_controller');
const GetTotalGamesController = () => import('#controllers/admin/statistics/get_total_games_controller');
const GetGameTypeDistributionController = () => import('#controllers/admin/statistics/get_game_type_distribution_controller');
const GetDailyResultsStatisticsController = () => import('#controllers/admin/statistics/get_daily_results_statistic_controller');
const GetUserBetStatisticsController = () => import('#controllers/admin/statistics/get_user_bet_statistics_controller');
const GetAllUserBetStatisticsController = () => import('#controllers/admin/statistics/get_all_user_bet_statistics_controller');
const CreateAgentController = () => import('#controllers/admin/agents/create_agent_controller');
const UpdateAgentController = () => import('#controllers/admin/agents/update_agent_controller');
const DeleteAgentController = () => import('#controllers/admin/agents/delete_agent_controller');
const CreateGameController = () => import('#controllers/admin/game/create_game_controller');
const UpdateGameController = () => import('#controllers/admin/game/update_game_controller');
const DeleteGameController = () => import('#controllers/admin/game/delete_game_controller');
const CreateGameScheduleController = () => import('#controllers/admin/game_schedules/create_game_schedule_controller');
const UpdateGameScheduleController = () => import('#controllers/admin/game_schedules/update_game_schedule_controller');
const DeleteGameScheduleController = () => import('#controllers/admin/game_schedules/delete_game_schedule_controller');
const SaveResultController = () => import('#controllers/admin/results/save_results_controller');
router.post('/api/v1/activate-license', [DefaultLicenseActivationController]);
router.post('/api/v1/activate-lifetime-license', [LifetimeLicenceController]);
router
    .group(() => {
    router.post('/login', [LoginController]);
    router
        .get('/games/available', [GetCurrentAvailableGamesController])
        .use(middleware.licenseCheck());
})
    .prefix('/api/v1');
router
    .group(() => {
    router.post('/logout', [LogoutController]);
    router.get('/me', [MeController]);
})
    .prefix('/api/v1')
    .use(middleware.auth());
router
    .group(() => {
    router.post('/bets/create', [CreateBetController]);
    router.get('/bets/active-coupon', [GetActiveCouponBetsController]);
    router.put('/bets/:id', [UpdateBetController]);
    router.put('/coupons/:id/validate', [ValidateCouponController]);
    router.get('/coupons/:couponId/bets', [GetBetsForCouponController]);
    router.get('/coupons/:couponId', [GetCouponDetailsController]);
    router.get('/coupons/users/:userId', [GetCouponsByUserIdController]);
})
    .prefix('/api/v1')
    .use([middleware.auth(), middleware.user(), middleware.activeAgent(), middleware.licenseCheck()]);
router
    .group(() => {
    router.post('/users/create', [CreateUserController]);
    router.get('/users', [ListUsersController]);
    router.get('/agents', [ListAgentsController]);
    router.get('/agents/:id', [GetAgentController]);
    router.get('/games', [ListGamesController]);
    router.get('/games/:id', [GetGameController]);
    router.get('/game-schedules', [GetAllGameSchedulesController]);
    router.get('/game-schedules/game/:gameId', [GetSchedulesByGameController]);
    router.get('/bets', [GetAllBetsController]);
    router.get('/bets/winning/user/:userId', [GetWinningBetsByUserController]);
    router.get('/bets/user/:userId', [GetBetsByUserController]);
    router.get('/bets/date', [GetBetsByDateController]);
    router.get('/bets/status', [GetBetsByStatusController]);
    router.get('/bets/game/:gameId', [GetBetsByGameController]);
    router.get('/results', [GetDailyResultsController]);
    router.get('/statistics/total-bets', [GetTotalBetsController]);
    router.get('/statistics/bets-by-status/:status', [GetBetsByStatusController]);
    router.get('/statistics/bet-type-distribution', [GetBetTypeDistributionController]);
    router.get('/statistics/total-games', [GetTotalGamesController]);
    router.get('/statistics/game-type-distribution', [GetGameTypeDistributionController]);
    router.get('/statistics/daily-results', [GetDailyResultsStatisticsController]);
    router.get('/statistics/user-bet/:userId', [GetUserBetStatisticsController]);
    router.get('/statistics/all-user-bet', [GetAllUserBetStatisticsController]);
})
    .prefix('/api/v1/admin')
    .use([
    middleware.auth(),
    middleware.activeAgent(),
    middleware.moderator(),
    middleware.licenseCheck(),
]);
router
    .group(() => {
    router.post('/admin/create', [CreateAdminController]);
    router.post('/agents/create', [CreateAgentController]);
    router.put('/agents/:id', [UpdateAgentController]);
    router.delete('/agents/:id', [DeleteAgentController]);
    router.post('/games/create', [CreateGameController]);
    router.put('/games/:id', [UpdateGameController]);
    router.delete('/games/:id', [DeleteGameController]);
    router.post('/game-schedules', [CreateGameScheduleController]);
    router.put('/game-schedules/:id', [UpdateGameScheduleController]);
    router.delete('/game-schedules/:id', [DeleteGameScheduleController]);
    router.post('/results', [SaveResultController]);
})
    .prefix('/api/v1/admin')
    .use([middleware.auth(), middleware.admin(), middleware.licenseCheck()]);
//# sourceMappingURL=routes.js.map