import { Link, useParams } from 'react-router-dom';

import { usePokemonTypes } from 'src/@hooks';

import { Container, styled } from 'src/@common/ui';
import { HeaderTitle } from 'src/@components/atoms';
import { PokemonCard } from 'src/@components/molecules';

const Wrapper = styled('div', {
	padding: '0 0 $5',
});

const Header = styled('div', {
	marginBottom: '$5',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	padding: '$4 0',
});

const Item = styled(Link, {
	display: 'block',
	padding: '$3 0',
});

export const PokemonByTypes = () => {
	const { type } = useParams();

	const { results } = usePokemonTypes(type!);

	return (
		<Wrapper>
			<Header>
				<Container>
					<HeaderTitle title={`Tipos - ${type}`} />
				</Container>
			</Header>
			<Container>
				{results?.map((item) => (
					<Item key={item.name} to={`/pokemon/${item.name}`}>
						<PokemonCard item={item} />
					</Item>
				))}
			</Container>
		</Wrapper>
	);
};
