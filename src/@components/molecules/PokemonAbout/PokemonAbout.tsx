import { sizeConverter } from 'src/@common/helpers';
import { styled } from 'src/@common/ui';

import { usePokemonSpecies } from 'src/@hooks';

import { IPokemon } from 'src/@types';

const Wrapper = styled('div');

const AboutText = styled('p', {
	fontSize: '$default',
	lineHeight: 1.6,
	marginBottom: '$5',
});

const AboutSizes = styled('ul', {
	borderRadius: '$sm',
	boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
	display: 'flex',
	listStyle: 'none',
	marginBottom: '$5',
	padding: '$4 $2',

	li: {
		fontSize: '$sm',
		padding: '0 $4',
		width: '50%',

		em: {
			color: '$lightGray',
			display: 'block',
			fontStyle: 'normal',
		},

		span: {
			fontSize: '$default',
		},
	},
});

export const PokemonAbout = ({ pokemon }: { pokemon: IPokemon }) => {
	const { results } = usePokemonSpecies(pokemon.id.toString());

	const getTextAbout = () => {
		if (results && results.flavor_text_entries) {
			const FLAVOR = results.flavor_text_entries.find(
				(item) => item.language.name === 'en'
			);
			return FLAVOR?.flavor_text;
		}
	};

	return (
		<Wrapper>
			<AboutText>{getTextAbout()}</AboutText>

			<AboutSizes>
				<li>
					<em>Height</em>
					<span>{sizeConverter.decimetresToMeter(pokemon.height)} m</span>
				</li>
				<li>
					<em>Weight</em>
					<span>{sizeConverter.hectogramsToKilogram(pokemon.weight)} kg</span>
				</li>
			</AboutSizes>
		</Wrapper>
	);
};
