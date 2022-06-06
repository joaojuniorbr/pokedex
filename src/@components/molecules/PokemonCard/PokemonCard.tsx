import { styled } from 'src/@common/ui';
import { IconType } from 'src/@components/atoms';
import { usePokemon } from 'src/@hooks/usePokemon';

const Wrapper = styled('div', {
	backgroundColor: '$defaultGray',
	borderRadius: '8px',
	display: 'flex',
	padding: '$4',
});

const Image = styled('div', {
	marginRight: '$5',
	width: '80px',

	img: {
		display: 'block',
	},
});

const Info = styled('div', {
	small: {
		display: 'block',
		marginBottom: '$2',

		span: {
			background: '$light',
			borderRadius: '4px',
			display: 'inline-block',
			fontSize: '$xs',
			fontWeight: '$semi',
			padding: '4px 8px',
		},
	},

	h3: {
		fontWeight: '$semi',
		textTransform: 'capitalize',
		marginBottom: '$3',
	},

	ul: {
		display: 'flex',
		listStyle: 'none',
		li: {
			marginRight: '$3',
		},
	},
});

export const PokemonCard = ({
	item: { name, url },
}: {
	item: { name: string; url: string };
}) => {
	const reduceUrlImage = () => {
		return url
			.replace('https://pokeapi.co/api/v2/pokemon/', '')
			.replace('/', '')
			.padStart(3, '0');
	};

	const { results } = usePokemon(name);

	return (
		<Wrapper>
			<Image>
				<img
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${reduceUrlImage()}.png`}
					alt={name}
					loading='lazy'
				/>
			</Image>
			<Info>
				<small>
					<span>#{reduceUrlImage()}</span>
				</small>
				<h3>{name}</h3>

				<ul>
					{results?.types.map((item) => (
						<li key={item.type.name}>
							<IconType name={item.type.name} size='icon-sm' />
						</li>
					))}
				</ul>
			</Info>
		</Wrapper>
	);
};
