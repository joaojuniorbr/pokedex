import { globalCss, styled } from '@stitches/react';

import BgPokeball from 'src/@assets/images/bg-pokeball.png';

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},

	html: {
		height: '100%',
	},

	body: {
		fontFamily: '$default',
		fontSize: 16,
		height: '100%',
	},

	'#root': {
		backgroundAttachment: 'fixed',
		backgroundImage: `url(${BgPokeball})`,
		backgroundPosition: 'center',
		minHeight: '100%',
		display: 'flex',
	},

	'a, button': {
		transition: 'all 0.3s ease-in-out',
		textDecoration: 'none',
	},

	img: {
		maxWidth: '100%',
	},

	svg: {
		display: 'block',
	},
});

export const Container = styled('div', {
	padding: '0 $5',
});
