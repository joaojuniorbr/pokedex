import { useParams } from 'react-router-dom';

import { usePokemon } from 'src/@hooks';

import { Container, styled } from 'src/@common/ui';

import {
	PokemonAbout,
	PokemonHeader,
	PokemonStats,
} from 'src/@components/molecules';
import { useState } from 'react';

const Wrapper = styled('div', {
	background: 'transparent',
	paddingBottom: '$5',
});

const Content = styled(Container, {
	background: '$light',
	borderTopLeftRadius: '$lg',
	borderTopRightRadius: '$lg',
	boxShadow: '0 -4px 4px rgba(0, 0, 0, 0.08)',
	marginTop: '-$4',
	paddingBottom: '$5',
	paddingTop: '$5',
	position: 'relative',
	zIndex: 3,
});

export const Pokemon = () => {
	const [selected, setSelect] = useState('about');

	const { idPokemon } = useParams();

	const { results } = usePokemon(idPokemon!);

	const onSelectTab = (slug: string) => setSelect(slug);

	if (!results) {
		return null;
	}

	return (
		<Wrapper>
			<PokemonHeader
				pokemon={results!}
				itemSelected={selected}
				onNavigation={onSelectTab}
			/>

			<Content>
				{selected === 'about' && <PokemonAbout pokemon={results!} />}

				{selected === 'stats' && <PokemonStats pokemon={results!} />}
			</Content>
		</Wrapper>
	);
};
