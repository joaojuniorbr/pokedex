export const getPokemonIdByUrl = (url: string) => {
	return parseInt(
		url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
	);
};
