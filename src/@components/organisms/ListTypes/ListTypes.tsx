import { Link } from 'react-router-dom';
import { styled } from 'src/@common/ui';
import { useTypes } from 'src/@hooks';

import { IconType } from '../../atoms/IconType';

const Wrapper = styled('ul', {
	display: 'grid',
	listStyle: 'none',
	gridTemplateColumns: '50% 50%',
	margin: '0 -$5',
	padding: '0 $4',
});

const Item = styled('li', {
	padding: '$3',
});

export const ListTypes = () => {
	const { results } = useTypes();

	return (
		<Wrapper>
			{results.map((item) => (
				<Item key={item.name}>
					<Link to={`/tipos/${item.name}`}>
						<IconType name={item.name} size='lg' />
					</Link>
				</Item>
			))}
		</Wrapper>
	);
};
