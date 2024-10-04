import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { describe, expect, it } from 'vitest';

describe('MainLayout', () => {
	it('renders navigation links with correct active styles', () => {
		const { getByRole } = render(
			<MemoryRouter initialEntries={['/']}>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/' element={<div>Home Page</div>} />
						<Route path='/favoritos' element={<div>Favoritos Page</div>} />
						<Route path='/perfil' element={<div>Perfil Page</div>} />
					</Route>
				</Routes>
			</MemoryRouter>
		);

		const homeLink = getByRole('link', { name: /home/i });
		expect(homeLink).toHaveClass(
			'border-primary bg-primary text-white hover:text-white'
		);

		const favoritosLink = getByRole('link', { name: /favoritos/i });
		expect(favoritosLink).toHaveClass(
			'text-slate-400 hover:bg-slate-400 hover:text-white'
		);

		const perfilLink = getByRole('link', { name: /perfil/i });
		expect(perfilLink).toHaveClass(
			'text-slate-400 hover:bg-slate-400 hover:text-white'
		);
	});

	it('applies active styles to the correct link based on location', () => {
		const { getByRole } = render(
			<MemoryRouter initialEntries={['/favoritos']}>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/' element={<div>Home Page</div>} />
						<Route path='/favoritos' element={<div>Favoritos Page</div>} />
						<Route path='/perfil' element={<div>Perfil Page</div>} />
					</Route>
				</Routes>
			</MemoryRouter>
		);

		const favoritosLink = getByRole('link', { name: /favoritos/i });
		expect(favoritosLink).toHaveClass(
			'border-primary bg-primary text-white hover:text-white'
		);

		const homeLink = getByRole('link', { name: /home/i });
		expect(homeLink).toHaveClass(
			'text-slate-400 hover:bg-slate-400 hover:text-white'
		);
	});
});
