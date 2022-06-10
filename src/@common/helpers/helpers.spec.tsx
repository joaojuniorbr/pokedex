import { getPokemonIdByUrl, reduceUrlId } from './';

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/16/';

describe('Helpers', () => {
	test('Extrai o id do pokemon da Url', () => {
		const PokemonId = getPokemonIdByUrl(URL_POKEMON);

		expect(PokemonId).toBe(16);
	});

	test('Extrai o id do pokemon da Url no formato de string', () => {
		const PokemonId = reduceUrlId(URL_POKEMON);

		expect(PokemonId).toBe('016');
	});
});
