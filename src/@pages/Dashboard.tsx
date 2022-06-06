import { Container, styled } from 'src/@common/ui';

import {
	HeaderMenu,
	HighlightHome,
	SearchInput,
} from 'src/@components/molecules';

import { ListTypes } from 'src/@components/organisms';

const Wrapper = styled('div', {
	background: 'transparent',
	paddingBottom: '$5',
});

const Menu = styled('div', {
	display: 'flex',
	justifyContent: 'end',
	padding: '$4 0',
});

const Highlight = styled(Container, {
	marginBottom: '$6',
});

const Search = styled(Container, {
	marginBottom: '$6',
});

export const Dashboard = () => (
	<Wrapper>
		<Menu>
			<HeaderMenu />
		</Menu>

		<Highlight>
			<HighlightHome
				title='Pokédex'
				text='Encontre Pokemon por nome ou usando o número da pokedex.'
			/>
		</Highlight>

		<Search>
			<SearchInput />
		</Search>

		<Container>
			<ListTypes />
		</Container>
	</Wrapper>
);
