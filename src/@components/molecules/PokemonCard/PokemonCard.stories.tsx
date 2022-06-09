import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'src/@common/ultils';

import { PokemonCard } from './PokemonCard';

export default {
	title: 'Molecules/PokemonCard',
	component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

export const Sample: ComponentStory<typeof PokemonCard> = (args) => (
	<PokemonCard {...args} />
);

Sample.args = {
	item: {
		name: 'pidgey',
		url: 'https://pokeapi.co/api/v2/pokemon/16/',
	},
};
