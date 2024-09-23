import { Route, Routes } from 'react-router-dom';
import { HomePage, PokemonPage } from './@pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/pokemon/:idPokemon' element={<PokemonPage />} />
		</Routes>
	);
}

export default App;
