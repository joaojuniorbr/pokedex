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
import { Loading } from '@compoents/atoms';

function App() {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className='w-full relative justify-center items-center h-lvh bg-[#dd2120]'>
				<Loading className='absolute top-0 left-0 right-0 bottom-0' />
			</div>
		);
	}

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
