import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, PokemonPage } from '@pages';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { isAuthenticated } = useAuth0();

	return (
		<BrowserRouter>
			{isAuthenticated ? (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/pokemon/:idPokemon' element={<PokemonPage />} />
				</Routes>
			) : (
				<LoginPage />
			)}
		</BrowserRouter>
	);
}

export default App;
