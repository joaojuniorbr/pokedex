import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	FavoritesPage,
	HomePage,
	LoginPage,
	PokemonPage,
	ProfilePage,
} from '@pages';
import { useAuth0 } from '@auth0/auth0-react';
import { MainLayout } from '@compoents/templates';

function App() {
	const { isAuthenticated } = useAuth0();

	return (
		<BrowserRouter>
			{isAuthenticated ? (
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/pokemon/:idPokemon' element={<PokemonPage />} />
						<Route path='/perfil' element={<ProfilePage />} />
						<Route path='/favoritos' element={<FavoritesPage />} />
					</Route>
				</Routes>
			) : (
				<LoginPage />
			)}
		</BrowserRouter>
	);
}

export default App;
