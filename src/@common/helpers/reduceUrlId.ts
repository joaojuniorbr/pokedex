export const reduceUrlId = (url: string) => {
	return url
		.replace('https://pokeapi.co/api/v2/pokemon/', '')
		.replace('/', '')
		.padStart(3, '0');
};
