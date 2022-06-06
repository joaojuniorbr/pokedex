import { Container, styled } from 'src/@common/ui';
import { HeaderTitle } from 'src/@components/atoms';
import { ListTypes } from 'src/@components/organisms';

const Wrapper = styled('div', {
	padding: '0 0 $5',
});

const Header = styled('div', {
	marginBottom: '$5',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	padding: '$4 0',
});

export const Types = () => {
	return (
		<Wrapper>
			<Header>
				<Container>
					<HeaderTitle title='Tipos' />
				</Container>
			</Header>
			<Container>
				<ListTypes />
			</Container>
		</Wrapper>
	);
};
