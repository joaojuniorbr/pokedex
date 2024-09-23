import { Stat } from '@types';

const MAX_STATS = {
	hp: 255,
	attack: 190,
	defense: 230,
	'special-attack': 180,
	'special-defense': 230,
	speed: 180,
};

const NAME_STATS = {
	hp: 'HP',
	attack: 'Ataque',
	defense: 'Defesa',
	'special-attack': 'Ataque Especial',
	'special-defense': 'Defesa Especial',
	speed: 'Velocidade',
};

const statsPercent = (stats: Stat[]) =>
	stats.map((stat) => ({
		name: stat.stat.name,
		base_stat: stat.base_stat,
		percentage:
			(stat.base_stat / MAX_STATS[stat.stat.name as keyof typeof MAX_STATS]) *
			100,
	}));

interface PokemonStatsProps {
	stats: Stat[];
	type: string;
}

export const PokemonStats = (props: PokemonStatsProps) => (
	<div className='container'>
		<table className='w-full'>
			{statsPercent(props.stats).map((stat) => (
				<tr key={stat.name}>
					<td className='w-auto py-1 whitespace-nowrap'>
						{NAME_STATS[stat.name as keyof typeof NAME_STATS]}
					</td>
					<td className='w-auto px-4 font-bold'>{stat.base_stat}</td>
					<td className='w-full'>
						<div className='w-full bg-gray-200 rounded-full h-3'>
							<div
								className={`bg-${props.type} h-3 rounded-full`}
								style={{ width: `${stat.percentage}%` }}
							></div>
						</div>
					</td>
				</tr>
			))}
		</table>
	</div>
);
