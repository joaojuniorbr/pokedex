import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Drawer, Spin } from 'antd';

import { useAuth0 } from '@auth0/auth0-react';
import { PageHeader } from '@compoents/atoms';
import { PokemonCard } from '@compoents/molecules';
import { SelectPokemon } from '@compoents/organisms';
import { useFavorites, useRooms } from '@hooks';

export const BattlePage = () => {
	const [selectedPokemon, setSelectedPokemon] = useState<string>();
	const [showFavorites, setShowFavorites] = useState(false);

	const { roomId } = useParams();

	const { user } = useAuth0();

	const { isLoading, room, updateRoom } = useRooms(roomId);

	const { data: favorites, isLoading: isFavoritesLoading } = useFavorites();

	const isHost = user?.sub === room?.creator_id;

	const userType = isHost ? 'creator' : 'opponent';

	const onHandleSelectedPokemon = useCallback((pokemonId: string) => {
		setSelectedPokemon(pokemonId);
		setShowFavorites(false);
	}, []);

	const handleToggleFavorites = useCallback(() => {
		setShowFavorites((prev) => !prev);
	}, []);

	const handleSelectPokemon = useCallback(() => {
		handleToggleFavorites();
	}, [handleToggleFavorites]);

	const handleCleanSelectedPokemon = useCallback(async () => {
		await updateRoom(roomId as string, `${userType}_ready`, false);
		await updateRoom(roomId as string, `${userType}_choice`, '');
		setSelectedPokemon(undefined);
	}, [roomId, updateRoom, userType]);

	const handleOnReady = useCallback(async () => {
		await updateRoom(roomId as string, `${userType}_id`, user?.sub);
		await updateRoom(roomId as string, `${userType}_email`, user?.email);
		await updateRoom(roomId as string, `${userType}_ready`, true);
		await updateRoom(roomId as string, `${userType}_choice`, selectedPokemon);
		setSelectedPokemon(undefined);
	}, [updateRoom, roomId, user, selectedPokemon, userType]);

	return (
		<Spin size='large' spinning={isLoading || isFavoritesLoading}>
			<PageHeader title='Batalha' />

			<div className='container py-5'>
				<div className='max-w-80 mx-auto'>
					<SelectPokemon
						onSelected={handleSelectPokemon}
						isWaiting={!room?.creator_choice && !isHost}
						pokemonId={room?.creator_choice || selectedPokemon}
						onClean={handleCleanSelectedPokemon}
						isSelected={!isHost && room?.creator_ready}
					/>

					<div className='w-20 h-20 mx-auto -mt-5 -mb-5 z-10 relative flex justify-center items-center bg-white rounded-full text-4xl border border-slate-300 text-slate-600 ri-gamepad-line' />

					<SelectPokemon
						onSelected={handleSelectPokemon}
						isWaiting={!room?.opponent_choice && isHost}
						pokemonId={room?.opponent_choice || selectedPokemon}
						onClean={handleCleanSelectedPokemon}
						isSelected={isHost && room?.opponent_ready}
					/>

					{selectedPokemon && (
						<Button
							block
							className='uppercase mt-4 border-none bg-green-800 text-white '
							size='large'
							icon={<i className='ri-check-line' />}
							onClick={handleOnReady}
							disabled={isHost ? room?.creator_ready : room?.opponent_ready}
						>
							Estou Pronto
						</Button>
					)}
				</div>
			</div>

			<Drawer
				open={showFavorites}
				title='Selecione o seu Pokemon'
				onClose={handleToggleFavorites}
				placement='bottom'
				height='90%'
			>
				<div className='row g-3'>
					{favorites?.map((pokemon) => (
						<div key={pokemon.pokemon_id} className='col-4 col-md-3 col-lg-2'>
							<PokemonCard
								pokemonId={pokemon.pokemon_id}
								actived
								onSelected={onHandleSelectedPokemon}
							/>
						</div>
					))}
				</div>
			</Drawer>
		</Spin>
	);
};
