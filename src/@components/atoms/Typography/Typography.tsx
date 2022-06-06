import { styled } from 'src/@common/ui';

type TTypography = 'default' | 'title';

const Type = styled('div', {
	fontSize: '$default',

	variants: {
		name: {
			default: {
				fontSize: '$default',
			},

			title: {
				fontSize: '$md',
				fontWeight: '$bold',
				textTransform: 'uppercase',
			},
		},
	},
});

export const Typography = ({ name }: { name?: TTypography }) => (
	<Type name={name} />
);
