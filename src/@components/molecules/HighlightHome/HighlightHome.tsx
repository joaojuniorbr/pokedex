import { styled } from 'src/@common/ui';

const Wrapper = styled('div', {
	position: 'relative',
});

const Title = styled('h1', {
	color: '$dark',
	fontSize: '$lg',
	fontWeight: '$semi',
});

const Text = styled('div', {
	color: '$mediumGray',
	fontSize: '$sm',
	lineHeight: '1.6',
});

interface IHighlightHome {
	title: string;
	text?: string;
}

export const HighlightHome = ({ title, text }: IHighlightHome) => (
	<Wrapper>
		<Title>{title}</Title>
		{text && <Text>{text}</Text>}
	</Wrapper>
);
