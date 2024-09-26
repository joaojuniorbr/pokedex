const createAbility = (
	name: string,
	url: string,
	is_hidden: boolean,
	slot: number
) => ({
	ability: { name, url },
	is_hidden,
	slot,
});

const createVersionDetails = (
	game_index: number,
	version_name: string,
	version_url: string
) => ({
	game_index,
	version: { name: version_name, url: version_url },
});

const createSprite = (
	front_default: string,
	back_default: string,
	front_shiny: string,
	back_shiny: string,
	front_female: string | null,
	back_female: string | null,
	front_shiny_female: string | null,
	back_shiny_female: string | null
) => ({
	front_default,
	back_default,
	front_shiny,
	back_shiny,
	front_female,
	back_female,
	front_shiny_female,
	back_shiny_female,
});

export const mockPokemon = {
	abilities: [
		createAbility(
			'overgrow',
			'https://pokeapi.co/api/v2/ability/65/',
			false,
			1
		),
		createAbility(
			'chlorophyll',
			'https://pokeapi.co/api/v2/ability/34/',
			true,
			3
		),
	],
	base_experience: 64,
	cries: {
		latest:
			'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
		legacy:
			'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg',
	},
	forms: [
		{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' },
	],
	game_indices: [
		createVersionDetails(153, 'red', 'https://pokeapi.co/api/v2/version/1/'),
		createVersionDetails(153, 'blue', 'https://pokeapi.co/api/v2/version/2/'),
		createVersionDetails(153, 'yellow', 'https://pokeapi.co/api/v2/version/3/'),
		createVersionDetails(1, 'gold', 'https://pokeapi.co/api/v2/version/4/'),
		createVersionDetails(1, 'silver', 'https://pokeapi.co/api/v2/version/5/'),
		createVersionDetails(1, 'crystal', 'https://pokeapi.co/api/v2/version/6/'),
		createVersionDetails(1, 'ruby', 'https://pokeapi.co/api/v2/version/7/'),
		createVersionDetails(1, 'sapphire', 'https://pokeapi.co/api/v2/version/8/'),
		createVersionDetails(1, 'emerald', 'https://pokeapi.co/api/v2/version/9/'),
		createVersionDetails(1, 'firered', 'https://pokeapi.co/api/v2/version/10/'),
		createVersionDetails(
			1,
			'leafgreen',
			'https://pokeapi.co/api/v2/version/11/'
		),
		createVersionDetails(1, 'diamond', 'https://pokeapi.co/api/v2/version/12/'),
		createVersionDetails(1, 'pearl', 'https://pokeapi.co/api/v2/version/13/'),
		createVersionDetails(
			1,
			'platinum',
			'https://pokeapi.co/api/v2/version/14/'
		),
		createVersionDetails(
			1,
			'heartgold',
			'https://pokeapi.co/api/v2/version/15/'
		),
		createVersionDetails(
			1,
			'soulsilver',
			'https://pokeapi.co/api/v2/version/16/'
		),
		createVersionDetails(1, 'black', 'https://pokeapi.co/api/v2/version/17/'),
		createVersionDetails(1, 'white', 'https://pokeapi.co/api/v2/version/18/'),
		createVersionDetails(1, 'black-2', 'https://pokeapi.co/api/v2/version/21/'),
		createVersionDetails(1, 'white-2', 'https://pokeapi.co/api/v2/version/22/'),
	],
	height: 7,
	held_items: [],
	id: 1,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
	moves: [
		{
			move: { name: 'razor-wind', url: 'https://pokeapi.co/api/v2/move/13/' },
			version_group_details: [
				{
					level_learned_at: 0,
					move_learn_method: {
						name: 'egg',
						url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
					},
					version_group: {
						name: 'gold-silver',
						url: 'https://pokeapi.co/api/v2/version-group/3/',
					},
				},
				{
					level_learned_at: 0,
					move_learn_method: {
						name: 'egg',
						url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
					},
					version_group: {
						name: 'crystal',
						url: 'https://pokeapi.co/api/v2/version-group/4/',
					},
				},
			],
		},
	],
	name: 'bulbasaur',
	order: 1,
	past_abilities: [],
	past_types: [],
	species: {
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
	},
	sprites: {
		...createSprite(
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
			null, // front_female
			null, // back_female
			null, // front_shiny_female
			null // back_shiny_female
		),
		other: {
			dream_world: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
				front_female: null,
			},
			home: {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
				front_female: null,
				front_shiny:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
				front_shiny_female: null,
			},
			'official-artwork': {
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
				front_shiny:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
			},
			showdown: {
				back_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif',
				back_female: null,
				back_shiny:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif',
				back_shiny_female: null,
				front_default:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif',
				front_female: null,
				front_shiny:
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif',
				front_shiny_female: null,
			},
		},
		versions: {
			'generation-i': {
				'red-blue': {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png',
					back_gray:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png',
					back_transparent:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png',
					front_gray:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png',
					front_transparent:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png',
				},
				yellow: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png',
					back_gray:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png',
					back_transparent:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png',
					front_gray:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png',
					front_transparent:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png',
				},
			},
		},
	},
	stats: [
		{
			base_stat: 45,
			effort: 0,
			stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
		},
		{
			base_stat: 49,
			effort: 0,
			stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
		},
		{
			base_stat: 49,
			effort: 0,
			stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
		},
		{
			base_stat: 65,
			effort: 1,
			stat: {
				name: 'special-attack',
				url: 'https://pokeapi.co/api/v2/stat/4/',
			},
		},
		{
			base_stat: 65,
			effort: 0,
			stat: {
				name: 'special-defense',
				url: 'https://pokeapi.co/api/v2/stat/5/',
			},
		},
		{
			base_stat: 45,
			effort: 0,
			stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
		},
	],
	types: [
		{
			slot: 1,
			type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
		},
		{
			slot: 2,
			type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
		},
	],
	weight: 69,
};
