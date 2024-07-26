import Game from '#app/models/game';
export class GameService {
    async getAllGames(page = 1, limit = 20) {
        return Game.query().paginate(page, limit);
    }
    async getGameById(id) {
        return Game.findOrFail(id);
    }
    async createGame(data) {
        return await Game.create(data);
    }
    async updateGame(id, data) {
        const game = await Game.findOrFail(id);
        game.merge(data);
        await game.save();
        return game;
    }
    async deleteGame(id) {
        const game = await Game.findOrFail(id);
        await game.delete();
        return { message: 'Game deleted successfully' };
    }
}
//# sourceMappingURL=game_service.js.map