import { Link } from 'react-router-dom';

interface PageHeaderProps {
	title: string;
}

export const PageHeader = (props: PageHeaderProps) => (
	<div className='bg-primary flex items-center h-14 text-white'>
		<div className='container relative'>
			<Link
				to='/'
				className='absolute left-0 top-[50%] translate-y-[-50%] text-3xl'
				data-testid='back-button'
			>
				<i className='ri-arrow-left-s-line' />
			</Link>
			<h1 className='text-lg font-bold text-center uppercase'>{props.title}</h1>
		</div>
	</div>
);
