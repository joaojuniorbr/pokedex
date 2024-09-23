import {
	Bug,
	Dark,
	Dragon,
	Electric,
	Fairy,
	Fighting,
	Fire,
	Flying,
	Ghost,
	Grass,
	Ground,
	Normal,
	Ice,
	Poison,
	Psychic,
	Rock,
	Steel,
	Water,
} from '@assets/types';

const style = {
	maxWidth: '100%',
	height: 'auto',
};

const typesIcons = {
	bug: <Bug style={style} />,
	dark: <Dark style={style} />,
	dragon: <Dragon style={style} />,
	electric: <Electric style={style} />,
	fairy: <Fairy style={style} />,
	fighting: <Fighting style={style} />,
	fire: <Fire style={style} />,
	flying: <Flying style={style} />,
	ghost: <Ghost style={style} />,
	grass: <Grass style={style} />,
	normal: <Normal style={style} />,
	ground: <Ground style={style} />,
	ice: <Ice style={style} />,
	poison: <Poison style={style} />,
	psychic: <Psychic style={style} />,
	rock: <Rock style={style} />,
	steel: <Steel style={style} />,
	water: <Water style={style} />,
};

interface IconTypeProps {
	name: string;
}

export const IconType = ({ name }: IconTypeProps) => {
	return typesIcons[name as keyof typeof typesIcons];
};
