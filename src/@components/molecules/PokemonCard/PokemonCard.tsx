import { styled } from 'src/@common/ui';
import { reduceUrlId } from 'src/@common/helpers';

import { IconType } from 'src/@components/atoms';

import { usePokemon } from 'src/@hooks';

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
			color: '$dark',
			display: 'inline-block',
			fontSize: '$xs',
			fontWeight: '$semi',
			padding: '4px 8px',
		},
	},

	h3: {
		color: '$dark',
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
	const { results } = usePokemon(name);

	return (
		<Wrapper>
			<Image>
				<img
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${reduceUrlId(
						url
					)}.png`}
					alt={name}
					loading='lazy'
				/>
			</Image>
			<Info>
				<small>
					<span>#{reduceUrlId(url)}</span>
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
