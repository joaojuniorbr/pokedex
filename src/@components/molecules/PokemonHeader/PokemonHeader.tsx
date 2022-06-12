import { Link, useNavigate } from 'react-router-dom';

import { MdOutlineArrowBack } from 'react-icons/md';

import { IPokemon, TTypes } from 'src/@types';

import { Container, styled, typeColor } from 'src/@common/ui';

import { IconType } from 'src/@components/atoms';

import { ReactComponent as Pokeball } from 'src/@assets/images/pokeball.svg';

const Wrapper = styled('section', {
	background: '$mediumGray',
	position: 'relative',
	overflow: 'hidden',
	height: 240,
});

const Background = styled('span', {
	display: 'block',
	height: '100%',
	left: 0,
	position: 'absolute',
	top: 0,
	width: '100%',
	zIndex: 1,
	opacity: 1,

	variants: {
		color: {
			bug: {
				backgroundColor: '$typeBug',
			},
			dark: {
				backgroundColor: '$typeDark',
			},
			dragon: {
				backgroundColor: '$typeDragon',
			},
			electric: {
				backgroundColor: '$typeElectric',
			},
			fairy: {
				backgroundColor: '$typeFairy',
			},
			fighting: {
				backgroundColor: '$typeFighting',
			},
			fire: {
				backgroundColor: '$typeFire',
			},
			flying: {
				backgroundColor: '$typeFlying',
			},
			ghost: {
				backgroundColor: '$typeGhost',
			},
			grass: {
				backgroundColor: '$typeGrass',
			},
			ground: {
				backgroundColor: '$typeGround',
			},
			ice: {
				backgroundColor: '$typeIce',
			},
			normal: {
				backgroundColor: '$typeNormal',
			},
			poison: {
				backgroundColor: '$typePoison',
			},
			psychic: {
				backgroundColor: '$typePsychic',
			},
			rock: {
				backgroundColor: '$typeRock',
			},
			steel: {
				backgroundColor: '$typeSteel',
			},
			water: {
				backgroundColor: '$typeWater',
			},
			unknown: {
				backgroundColor: '$typeUnknown',
			},
			shadow: {
				backgroundColor: '$typeShadow',
			},
		},
	},
});

const NavTop = styled('div', {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	paddingTop: '$4',

	button: {
		background: 'transparent',
		border: 'none',
		color: '$light',
		fontSize: '$lg',
	},
});

const TagId = styled('small', {
	background: '$light',
	fontSize: '$xs',
	fontWeight: '$regular',
	letterSpacing: 0.5,
	display: 'block',
	padding: '4px 6px 3px',
	borderRadius: '4px',
});

const Info = styled('section', {
	alignItems: 'center',
	color: '$light',
	display: 'flex',
	padding: '$4 0 $6',

	figure: {
		display: 'block',
		margin: '0 $4 0 0',
		width: '100px',

		img: {
			display: 'block',
			height: 'auto',
			width: '100%',
		},
	},

	h1: {
		fontSize: '$lg',
		fontWeight: '$bold',
		lineHeight: '1.2',
		margin: 0,
		textTransform: 'uppercase',
	},

	ul: {
		display: 'flex',
		listStyle: 'none',
		li: {
			padding: '$3 $3 0 0',
		},
	},
});

const PokeballBg = styled(Pokeball, {
	position: 'absolute',
	left: '-15%',
	zIndex: 2,
	opacity: 0.1,
	height: '120%',
	width: 'auto',
	top: '-5%',
});

const Navigation = styled('nav', {
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
});

const NavigationItem = styled('button', {
	background: 'transparent',
	border: 'none',
	color: '$light',
	fontSize: '$default',
	fontWeight: '$regular',
	opacity: 0.5,
	transition: 'all 0.5s ease-in-out',

	variants: {
		selected: {
			true: {
				fontWeight: '$semi',
				opacity: 1,
			},
		},
	},
});

export const PokemonHeader = ({
	pokemon,
	itemSelected,
	onNavigation,
}: {
	pokemon: IPokemon;
	itemSelected?: string;
	onNavigation: (slug: string) => void;
}) => {
	const navigate = useNavigate();

	const handleBackButton = () => {
		navigate(-1);
	};

	const handleNavigate = (slug: string) => {
		onNavigation(slug);
	};

	if (pokemon === undefined) {
		return null;
	}

	const typeDefault = pokemon.types[0].type.name as TTypes;

	const navigationItems = [
		{
			name: 'About',
			slug: 'about',
		},
		{
			name: 'Stats',
			slug: 'stats',
		},
		{
			name: 'Evolution',
			slug: 'evolution',
		},
	];

	return (
		<Wrapper>
			<PokeballBg />
			<Background color={typeDefault} />
			<Container css={{ position: 'relative', zIndex: 5 }}>
				<NavTop>
					<button onClick={handleBackButton} aria-label='Voltar'>
						<MdOutlineArrowBack />
					</button>

					<TagId
						css={{
							color: typeColor(typeDefault),
						}}>
						#{pokemon.id.toString().padStart(3, '0')}
					</TagId>
				</NavTop>

				<Info>
					<figure>
						<img
							src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
								.toString()
								.padStart(3, '0')}.png`}
							alt={pokemon.name}
							loading='lazy'
						/>
					</figure>
					<aside>
						<h1>{pokemon.name}</h1>
						<ul>
							{pokemon.types.map((item) => (
								<li key={item.type.name}>
									<Link to={`/tipos/${item.type.name}`}>
										<IconType name={item.type.name} size='tag-light' />
									</Link>
								</li>
							))}
						</ul>
					</aside>
				</Info>

				<Navigation>
					{navigationItems.map((item) => (
						<NavigationItem
							key={item.slug}
							selected={itemSelected === item.slug}
							onClick={() => handleNavigate(item.slug)}>
							{item.name}
						</NavigationItem>
					))}
				</Navigation>
			</Container>
		</Wrapper>
	);
};

// https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg
