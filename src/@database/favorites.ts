import { database } from './database';

class Favorites {
	userId = '';

	constructor(userId: string) {
		this.userId = userId;
	}

	async getFavorites() {
		const { data } = await database
			.from('favorites')
			.select('pokemon_id')
			.eq('user_id', this.userId);

		return data;
	}

	async addFavorite(pokemonId: string) {
		const { data: isFavorite } = await database
			.from('favorites')
			.select('*')
			.eq('user_id', this.userId)
			.eq('pokemon_id', pokemonId);

		if (!isFavorite?.length) {
			const { data } = await database
				.from('favorites')
				.insert({ user_id: this.userId, pokemon_id: pokemonId });
			return data;
		}

		return null;
	}

	async removeFavorite(pokemonId: string) {
		const { data } = await database
			.from('favorites')
			.delete()
			.eq('user_id', this.userId)
			.eq('pokemon_id', pokemonId);

		return data;
	}

	async isPokemonFavorited(pokemonId: string) {
		const { data } = await database
			.from('favorites')
			.select('*')
			.eq('user_id', this.userId)
			.eq('pokemon_id', pokemonId);

		return data && data.length > 0;
	}
}

export default Favorites;
