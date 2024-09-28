import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, PokemonPage } from '@pages';
import { useAuth0 } from '@auth0/auth0-react';

<App />;

function App() {
	const { isAuthenticated } = useAuth0();

	console.log({ isAuthenticated });

	return isAuthenticated ? (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/pokemon/:idPokemon' element={<PokemonPage />} />
		</Routes>
	) : (
		<LoginPage />
	);
}

export default App;
