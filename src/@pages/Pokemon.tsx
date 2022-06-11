import { useParams } from 'react-router-dom';

import { usePokemon } from 'src/@hooks';

import { Container, styled } from 'src/@common/ui';

import { PokemonHeader } from 'src/@components/molecules';
import { useState } from 'react';

const Wrapper = styled('div', {
	background: 'transparent',
	paddingBottom: '$5',
});

const Content = styled(Container, {
	background: '$light',
	borderTopLeftRadius: '$lg',
	borderTopRightRadius: '$lg',
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

	return (
		<Wrapper>
			<PokemonHeader
				pokemon={results!}
				itemSelected={selected}
				onNavigation={onSelectTab}
			/>

			<Content>test</Content>
		</Wrapper>
	);
};
