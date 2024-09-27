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
	TypeNames,
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
	isLabel?: boolean;
	variant?: 'solid' | 'outline';
}

export const IconType = ({ name, isLabel, variant }: IconTypeProps) => {
	const solidStyle = `bg-${name} text-white`;
	const outlineStyle = `color-${name}`;

	if (isLabel) {
		return (
			<div
				className={`${
					variant === 'outline' ? outlineStyle : solidStyle
				} border-${name} border py-2 px-3 rounded-md flex items-center`}
			>
				<span className='w-6 mr-2'>
					<IconType name={name} />
				</span>
				{TypeNames[name as keyof typeof TypeNames]}
			</div>
		);
	}
	return typesIcons[name as keyof typeof typesIcons];
};
