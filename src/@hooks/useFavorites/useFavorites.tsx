import { useAuth0 } from '@auth0/auth0-react';
import { Favorites } from '@database';
import { message } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useFavorites = () => {
	const { user } = useAuth0();
	const [isLoading, setIsLoading] = useState(true);

	const [data, setData] = useState<
		| {
				pokemon_id: string;
		  }[]
		| null
	>();

	const favorites = useMemo(
		() => new Favorites(user?.sub as string),
		[user?.sub]
	);

	const updateFavorites = useCallback(async () => {
		setIsLoading(true);
		const data = await favorites.getFavorites();
		setIsLoading(false);
		setData(data);
	}, [favorites]);

	const addFavorite = async (pokemonId: string) => {
		await favorites.addFavorite(pokemonId);
		message.success('Favorito adicionado com sucesso!');
		updateFavorites();
	};

	const removeFavorite = async (pokemonId: string) => {
		await favorites.removeFavorite(pokemonId);
		message.success('Favorito removido com sucesso!');
		updateFavorites();
	};

	const isPokemonFavorited = (pokemonId: string) =>
		data?.some((item) => item.pokemon_id === pokemonId);

	useEffect(() => {
		updateFavorites();
	}, [updateFavorites]);

	return {
		data,
		isLoading,
		addFavorite,
		removeFavorite,
		isPokemonFavorited,
	};
};
