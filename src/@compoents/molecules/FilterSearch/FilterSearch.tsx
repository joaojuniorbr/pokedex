import { useCallback } from 'react';

import { Typography } from 'antd';

import { useTypes } from '@hooks';
import { TypeNames } from '@assets/types';
import { IconType } from '../../atoms';

export const FilterSearch = ({
	value,
	onChange,
}: {
	value?: string;
	onChange?: (e: string) => void;
}) => {
	const { data } = useTypes();

	const handleClick = useCallback(
		(name: string) => () => {
			onChange?.(name);
		},
		[onChange]
	);

	return (
		<div className='py-3' data-testid='filter-search'>
			<Typography.Title level={5} className='mb-3'>
				Filtrar por tipo:
			</Typography.Title>

			<div className='row g-2 justify-center'>
				{data?.results.map((type) => (
					<div key={type.name} className='col-auto'>
						<button
							className={`w-full flex items-center transition-all text-sm border border-${
								type.name
							} rounded-lg px-3 py-2 ${
								value === type.name
									? `bg-${type.name} text-white`
									: `color-${type.name}`
							}`}
							onClick={handleClick(type.name)}
							type='button'
							data-testid={`filter-search--button--${type.name}`}
						>
							<span className='mr-2 w-4'>
								<IconType name={type.name} />
							</span>
							{TypeNames[type.name as keyof typeof TypeNames]}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
