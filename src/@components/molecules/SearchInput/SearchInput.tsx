import { RiSearchLine } from 'react-icons/ri';

import { styled } from 'src/@common/ui';

const Wrapper = styled('form', {
	position: 'relative',
});

const Input = styled('div', {
	position: 'relative',
});

const InputText = styled('input', {
	background: '$defaultGray',
	border: 'none',
	borderRadius: '4px',
	fontSize: '$sm',
	padding: '$4 $4 $4 48px',
	width: '100%',
});

const InputIcon = styled('span', {
	display: 'block',
	left: '16px',
	pointerEvents: 'none',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',

	svg: {
		display: 'block',
	},
});

export const SearchInput = () => {
	return (
		<Wrapper>
			<Input>
				<InputIcon>
					<RiSearchLine />
				</InputIcon>
				<InputText placeholder='Qual Pokémon vc está procurando?' />
			</Input>
		</Wrapper>
	);
};
