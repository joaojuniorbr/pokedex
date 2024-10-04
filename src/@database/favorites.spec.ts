import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import Favorites from './favorites';
import { database } from './database';

vi.mock('./database');

describe('Favorites', () => {
	const userId = 'user123';

	let favorites: Favorites;

	const mockData = [{ pokemon_id: 'bulbasaur' }];

	const pokemonId = mockData[0].pokemon_id;

	beforeEach(() => {
		favorites = new Favorites(userId);
		vi.clearAllMocks();
	});

	it('should get favorites', async () => {
		(database.from as Mock).mockReturnValue({
			select: vi.fn().mockReturnValue({
				eq: vi.fn().mockResolvedValue({ data: mockData, error: null }),
			}),
		});

		const result = await favorites.getFavorites();
		expect(result).toEqual(mockData);
		expect(database.from).toHaveBeenCalledWith('favorites');
	});

	it('should add favorite if not already favorited', async () => {
		(database.from as Mock).mockReturnValue({
			select: vi.fn().mockReturnValue({
				eq: vi.fn().mockReturnValue({
					data: null,
					error: null,
					eq: vi.fn().mockReturnValue({
						data: null,
						error: null,
					}),
				}),
			}),
			insert: vi.fn().mockReturnValue({
				data: mockData,
				error: null,
			}),
		});

		const result = await favorites.addFavorite(mockData[0].pokemon_id);

		expect(result).toEqual([{ pokemon_id: mockData[0].pokemon_id }]);
		expect(database.from).toHaveBeenCalledWith('favorites');
	});

	it('should not add favorite if already favorited', async () => {
		(database.from as Mock).mockReturnValue({
			select: vi.fn().mockReturnValue({
				eq: vi.fn().mockReturnValue({
					data: mockData,
					error: null,
					eq: vi.fn().mockReturnValue({
						data: mockData,
						error: null,
					}),
				}),
			}),
		});

		const result = await favorites.addFavorite(pokemonId);
		expect(result).toBeNull();
		expect(database.from).toHaveBeenCalledWith('favorites');
	});

	it('should remove favorite', async () => {
		(database.from as Mock).mockReturnValue({
			delete: vi.fn().mockReturnValue({
				eq: vi.fn().mockReturnValue({
					data: mockData,
					error: null,
					eq: vi.fn().mockReturnValue({
						data: mockData,
						error: null,
					}),
				}),
			}),
		});

		const result = await favorites.removeFavorite(pokemonId);
		expect(result).toEqual(mockData);
		expect(database.from).toHaveBeenCalledWith('favorites');
	});

	it('should check if a Pokémon is favorited', async () => {
		(database.from as Mock).mockReturnValue({
			select: vi.fn().mockReturnValue({
				eq: vi.fn().mockReturnValue({
					data: mockData,
					error: null,
					eq: vi.fn().mockReturnValue({
						data: mockData,
						error: null,
					}),
				}),
			}),
		});

		const result = await favorites.isPokemonFavorited(pokemonId);

		const dataTest = await favorites.getFavorites();

		console.log({ result, dataTest });

		expect(result).toBe(true);
		expect(database.from).toHaveBeenCalledWith('favorites');
	});

	it('should return false if a Pokémon is not favorited', async () => {
		(database.from as Mock).mockReturnValue({
			select: vi.fn().mockReturnValue({
				eq: vi.fn().mockReturnValue({
					data: [],
					error: null,
					eq: vi.fn().mockReturnValue({ data: [], error: null }),
				}),
			}),
		});

		const result = await favorites.isPokemonFavorited(pokemonId);
		expect(result).toBe(false);
		expect(database.from).toHaveBeenCalledWith('favorites');
	});
});
