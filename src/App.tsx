import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { styled } from '@stitches/react';

import { globalStyles } from './@common/ui';

import { Dashboard, PokemonByTypes, Types, Pokemon } from './@pages';

const Layout = styled('main', {
	background: '$light',
	boxShadow: '0 0 80px 0 rgba(0, 0, 0, 0.2)',
	margin: '0 auto',
	maxWidth: '480px',
	minHeight: '100%',
	width: '100%',
});

function App() {
	globalStyles();

	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/tipos/:type' element={<PokemonByTypes />} />
					<Route path='/tipos' element={<Types />} />
					<Route path='/pokemon/:idPokemon' element={<Pokemon />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
}

export default App;
