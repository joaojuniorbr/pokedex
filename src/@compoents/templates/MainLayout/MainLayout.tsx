import { Link, Outlet, useLocation } from 'react-router-dom';

const nav = [
	{
		name: 'Home',
		path: '/',
		icon: 'ri-home-4-line',
	},
	{
		name: 'Favoritos',
		path: '/favoritos',
		icon: 'ri-star-line',
	},
	{
		name: 'Perfil',
		path: '/perfil',
		icon: 'ri-user-line',
	},
];

export const MainLayout = () => {
	const location = useLocation();

	const styleActive = (path: string) => {
		const isActive = location.pathname === path;

		if (isActive) {
			return 'border-primary bg-primary text-white hover:text-white';
		} else {
			return 'text-slate-400 hover:bg-slate-400 hover:text-white';
		}
	};

	return (
		<main className='pb-20'>
			<Outlet />
			<nav className='fixed bottom-0 left-0 w-full py-3 border-t border-slate-300 border-solid bg-slate-50'>
				<div className='container'>
					<div className='row justify-center'>
						{nav.map((item) => (
							<div className='col-auto' key={item.name}>
								<Link
									to={item.path}
									className={`text-lg mx-2 border border-slate-400 p-2 flex leading-none rounded-md transition-all ${styleActive(
										item.path
									)}`}
									title={item.name}
								>
									<i className={item.icon} />
								</Link>
							</div>
						))}
					</div>
				</div>
			</nav>
		</main>
	);
};
