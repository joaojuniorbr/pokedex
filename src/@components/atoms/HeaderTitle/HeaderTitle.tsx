import { useNavigate } from 'react-router-dom';

import { MdOutlineArrowBack } from 'react-icons/md';

import { styled } from 'src/@common/ui';

const Wrapper = styled('div', {
	display: 'flex',
	alignItems: 'center',
	width: '100%',
});

const Title = styled('h1', {
	fontSize: '$default',
	lineHeight: 'normal',
	paddingTop: '2px',
	textTransform: 'uppercase',
});

const IconBack = styled('button', {
	background: 'transparent',
	border: 'none',
	color: '$mediumGray',
	display: 'block',
	fontSize: 22,
	marginRight: '$4',

	svg: {
		display: 'block',
	},
});

export const HeaderTitle = ({ title }: { title: string }) => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<Wrapper>
			<IconBack onClick={handleBack}>
				<MdOutlineArrowBack />
			</IconBack>
			<Title>{title}</Title>
		</Wrapper>
	);
};
