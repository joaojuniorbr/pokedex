import { styled } from 'src/@common/ui';
import { Typography } from 'src/@components/atoms';
import { IPokemon } from 'src/@types';

const Wrapper = styled('div');

const TableStats = styled('table', {
	width: '100%',
});

const TableStatsName = styled('th', {
	textAlign: 'right',
	fontSize: '$default',
});

const reduceLabel = (label: string) => {
	const labels = [
		'hp',
		'attack',
		'defense',
		'special-attack',
		'special-defense',
		'speed',
	];
};

export const PokemonStats = ({ pokemon }: { pokemon: IPokemon }) => {
	return (
		<Wrapper>
			<Typography name='title'>Base Stats</Typography>

			<TableStats>
				{pokemon.stats.map((item, index) => (
					<tr key={`item-${index}`}>
						<TableStatsName>{item.stat.name}</TableStatsName>
						<td>{item.base_stat}</td>
						<td></td>
					</tr>
				))}
			</TableStats>
		</Wrapper>
	);
};
