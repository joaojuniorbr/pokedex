import { useEffect, useRef } from 'react';
import { Button, Spin, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import autoAnimate from '@formkit/auto-animate';

import { PokemonCard } from '@compoents/molecules';

import { usePokemon } from '@hooks';

interface SelectPokemonProps {
	pokemonId?: string;
	isWaiting?: boolean;
	onSelected?: () => void;
	onClean?: () => void;
	isSelected?: boolean;
}

export const SelectPokemon = ({
	pokemonId,
	isWaiting,
	onSelected,
	onClean,
	isSelected,
}: SelectPokemonProps) => {
	const parent = useRef(null);

	const { data } = usePokemon(pokemonId as string);

	useEffect(() => {
		if (parent.current) {
			autoAnimate(parent.current);
		}
	}, [parent]);

	return (
		<div
			className='px-5 py-4 bg-slate-100 rounded-md border border-slate-300 flex justify-center items-center flex-col'
			ref={parent}
		>
			{isWaiting ? (
				<>
					<Spin size='large' className='mb-4' />
					<Tag color='warning'>Aguarde seu oponente</Tag>
				</>
			) : data ? (
				<>
					<PokemonCard
						pokemonId={pokemonId as string}
						onSelected={onSelected}
						actived
					/>

					{!isSelected && (
						<Button
							className='mt-2'
							danger
							type='primary'
							icon={<DeleteOutlined />}
							onClick={onClean}
						/>
					)}
				</>
			) : (
				<Button type='primary' onClick={onSelected}>
					Adicione um Pokemon
				</Button>
			)}
		</div>
	);
};
