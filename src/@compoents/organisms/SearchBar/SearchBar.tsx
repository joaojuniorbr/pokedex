import { useCallback, useState } from 'react';

import { Button, Image, Input, Modal } from 'antd';
import { FilterFilled } from '@ant-design/icons';

import { IconType } from '../../atoms';
import { FilterSearch } from '../../molecules';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

interface SearchBarProps {
	onSearch?: (value: string) => void;
	onFilter?: (value: string) => void;
}

export const SearchBar = ({ onSearch, onFilter }: SearchBarProps) => {
	const [filter, setFilter] = useState<string>();
	const [showFilter, setShowFilter] = useState(false);

	const { user } = useAuth0();

	const handleToggleFilter = useCallback(
		() => setShowFilter(!showFilter),
		[showFilter]
	);

	const handleFilterChange = useCallback(
		(value: string) => {
			setFilter(value);
			onFilter?.(value);
		},
		[setFilter, onFilter]
	);

	const handleSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onSearch?.(e.target.value);
		},
		[onSearch]
	);

	const handleClearFilter = useCallback(() => {
		setFilter(undefined);
		onFilter?.('');
	}, [onFilter]);

	return (
		<>
			<div className='row g-3'>
				<div className='col'>
					<Input
						placeholder='Pesquisar'
						size='large'
						onChange={handleSearch}
						data-testid='filter-input'
					/>
				</div>
				{filter && (
					<div className='col-auto'>
						<button
							onClick={handleClearFilter}
							className={`flex items-center w-10 h-10 p-[10px] rounded-full color-${filter} bg-white`}
							data-testid='filter-clear-button'
						>
							<IconType name={filter} />
						</button>
					</div>
				)}

				<div className='col-auto'>
					<Button
						size='large'
						icon={<FilterFilled style={{ color: 'var(--primary)' }} />}
						onClick={handleToggleFilter}
						data-testid='filter-button'
					/>
				</div>

				<div className='col-auto'>
					<Link
						to='/perfil'
						className='w-10 h-10 overflow-hidden rounded-full flex'
						data-testid='logout-button'
					>
						<Image
							preview={false}
							src={user?.picture}
							alt={user?.name}
							fallback={`https://robohash.org/${user?.email}`}
						/>
					</Link>
				</div>
			</div>

			<Modal
				open={showFilter}
				onCancel={handleToggleFilter}
				footer={null}
				destroyOnClose
			>
				<FilterSearch value={filter} onChange={handleFilterChange} />
			</Modal>
		</>
	);
};
