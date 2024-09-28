export const Loading = (
	props: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>
) => (
	<div
		{...props}
		className={`loading-pokemon ${props.className}`}
		data-testid='loading'
		role='loading'
	>
		<div className='ball'></div>
		<div className='half-ball'></div>
		<div className='big-button'></div>
		<div className='small-button'></div>
		<div className='horizon'></div>
	</div>
);
