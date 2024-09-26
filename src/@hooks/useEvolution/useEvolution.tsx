import { useQuery } from '@tanstack/react-query';

import { api } from '@common';
import axios from 'axios';

interface EvolutionChain {
	species_name: string;
	species_id: number;
	evolves_to: EvolutionChain[];
}

interface EvolutionDetails {
	gender: null | number;
	held_item: null | { name: string; url: string };
	item: null | { name: string; url: string };
	known_move: null | { name: string; url: string };
	known_move_type: null | { name: string; url: string };
	location: null | { name: string; url: string };
	min_affection: null | number;
	min_beauty: null | number;
	min_happiness: null | number;
	min_level: null | number;
	needs_overworld_rain: boolean;
	party_species: null | { name: string; url: string };
	party_type: null | { name: string; url: string };
	relative_physical_stats: null | number;
	time_of_day: string;
	trade_species: null | { name: string; url: string };
	trigger: { name: string; url: string };
	turn_upside_down: boolean;
}

interface Species {
	name: string;
	url: string;
}

interface EvolutionChainLink {
	is_baby: boolean;
	species: Species;
	evolution_details: EvolutionDetails[];
	evolves_to: EvolutionChainLink[];
}

interface EvolutionResponse {
	baby_trigger_item: null | { name: string; url: string };
	chain: EvolutionChainLink;
	id: number;
}

const getPokemonEvolutionChain = async (
	pokemonId: string
): Promise<EvolutionChain[]> => {
	const speciesResponse = await api.get(`/pokemon-species/${pokemonId}`);
	const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

	const evolutionChainResponse = await axios.get<EvolutionResponse>(
		evolutionChainUrl
	);
	const chain = evolutionChainResponse.data.chain;

	const parseEvolutionChain = (chain: EvolutionChainLink): EvolutionChain => {
		const speciesUrlParts = chain.species.url.split('/');
		const speciesId = parseInt(speciesUrlParts[speciesUrlParts.length - 2]);

		return {
			species_name: chain.species.name,
			species_id: speciesId,
			evolves_to: chain.evolves_to.map(parseEvolutionChain),
		};
	};

	const evolutionArray: EvolutionChain[] = [];
	let currentChain: EvolutionChain | null = parseEvolutionChain(chain);

	while (currentChain) {
		evolutionArray.push(currentChain);
		if (currentChain.evolves_to.length > 0) {
			currentChain = currentChain.evolves_to[0];
		} else {
			currentChain = null;
		}
	}

	return evolutionArray;
};

export const useEvolution = (pokemonId: string) =>
	useQuery({
		queryKey: ['evolution', pokemonId],
		queryFn: () => getPokemonEvolutionChain(pokemonId),
		staleTime: Infinity,
	});
