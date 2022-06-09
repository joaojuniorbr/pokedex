import { TTypes } from 'src/@types';

import { styled } from 'src/@common/ui';

import { ReactComponent as IconBug } from 'src/@assets/images/types/bug.svg';
import { ReactComponent as IconDark } from 'src/@assets/images/types/dark.svg';
import { ReactComponent as IconDragon } from 'src/@assets/images/types/dragon.svg';
import { ReactComponent as IconElectric } from 'src/@assets/images/types/electric.svg';
import { ReactComponent as IconFairy } from 'src/@assets/images/types/fairy.svg';
import { ReactComponent as IconFighting } from 'src/@assets/images/types/fighting.svg';
import { ReactComponent as IconFire } from 'src/@assets/images/types/fire.svg';
import { ReactComponent as IconFlying } from 'src/@assets/images/types/flying.svg';
import { ReactComponent as IconGhost } from 'src/@assets/images/types/ghost.svg';
import { ReactComponent as IconGrass } from 'src/@assets/images/types/grass.svg';
import { ReactComponent as IconGround } from 'src/@assets/images/types/ground.svg';
import { ReactComponent as IconIce } from 'src/@assets/images/types/ice.svg';
import { ReactComponent as IconNormal } from 'src/@assets/images/types/normal.svg';
import { ReactComponent as IconPoison } from 'src/@assets/images/types/poison.svg';
import { ReactComponent as IconPsychic } from 'src/@assets/images/types/psychic.svg';
import { ReactComponent as IconRock } from 'src/@assets/images/types/rock.svg';
import { ReactComponent as IconSteel } from 'src/@assets/images/types/steel.svg';
import { ReactComponent as IconWater } from 'src/@assets/images/types/water.svg';

const MAIN_ICONS = {
	bug: <IconBug />,
	dark: <IconDark />,
	dragon: <IconDragon />,
	electric: <IconElectric />,
	fairy: <IconFairy />,
	fighting: <IconFighting />,
	fire: <IconFire />,
	flying: <IconFlying />,
	ghost: <IconGhost />,
	grass: <IconGrass />,
	ground: <IconGround />,
	ice: <IconIce />,
	normal: <IconNormal />,
	poison: <IconPoison />,
	psychic: <IconPsychic />,
	rock: <IconRock />,
	steel: <IconSteel />,
	water: <IconWater />,
	unknown: <IconNormal />,
	shadow: <IconNormal />,
};

const Wrapper = styled('div', {
	alignItems: 'center',
	display: 'flex',
	fontSize: '$sm',
	fontWeight: '$semi',
	textTransform: 'uppercase',

	em: {
		display: 'block',
		width: 20,

		svg: {
			display: 'block',
			height: 14,
			width: 'auto',
		},
	},

	variants: {
		color: {
			bug: {
				borderColor: '$typeBug',
				color: '$typeBug',
				svg: {
					path: {
						fill: '$typeBug',
					},
				},
			},
			dark: {
				borderColor: '$typeDark',
				color: '$typeDark',
				svg: {
					path: {
						fill: '$typeDark',
					},
				},
			},
			dragon: {
				borderColor: '$typeDragon',
				color: '$typeDragon',
				svg: {
					path: {
						fill: '$typeDragon',
					},
				},
			},
			electric: {
				borderColor: '$typeElectric',
				color: '$typeElectric',
				svg: {
					path: {
						fill: '$typeElectric',
					},
				},
			},
			fairy: {
				borderColor: '$typeFairy',
				color: '$typeFairy',
				svg: {
					path: {
						fill: '$typeFairy',
					},
				},
			},
			fighting: {
				borderColor: '$typeFighting',
				color: '$typeFighting',
				svg: {
					path: {
						fill: '$typeFighting',
					},
				},
			},
			fire: {
				borderColor: '$typeFire',
				color: '$typeFire',
				svg: {
					path: {
						fill: '$typeFire',
					},
				},
			},
			flying: {
				borderColor: '$typeFlying',
				color: '$typeFlying',
				svg: {
					path: {
						fill: '$typeFlying',
					},
				},
			},
			ghost: {
				borderColor: '$typeGhost',
				color: '$typeGhost',
				svg: {
					path: {
						fill: '$typeGhost',
					},
				},
			},
			grass: {
				borderColor: '$typeGrass',
				color: '$typeGrass',
				svg: {
					path: {
						fill: '$typeGrass',
					},
				},
			},
			ground: {
				borderColor: '$typeGround',
				color: '$typeGround',
				svg: {
					path: {
						fill: '$typeGround',
					},
				},
			},
			ice: {
				borderColor: '$typeIce',
				color: '$typeIce',
				svg: {
					path: {
						fill: '$typeIce',
					},
				},
			},
			normal: {
				borderColor: '$typeNormal',
				color: '$typeNormal',
				svg: {
					path: {
						fill: '$typeNormal',
					},
				},
			},
			poison: {
				borderColor: '$typePoison',
				color: '$typePoison',
				svg: {
					path: {
						fill: '$typePoison',
					},
				},
			},
			psychic: {
				borderColor: '$typePsychic',
				color: '$typePsychic',
				svg: {
					path: {
						fill: '$typePsychic',
					},
				},
			},
			rock: {
				borderColor: '$typeRock',
				color: '$typeRock',
				svg: {
					path: {
						fill: '$typeRock',
					},
				},
			},
			steel: {
				borderColor: '$typeSteel',
				color: '$typeSteel',
				svg: {
					path: {
						fill: '$typeSteel',
					},
				},
			},
			water: {
				borderColor: '$typeWater',
				color: '$typeWater',
				svg: {
					path: {
						fill: '$typeWater',
					},
				},
			},
			unknown: {
				borderColor: '$typeNormal',
				color: '$typeNormal',
				svg: {
					path: {
						fill: '$typeNormal',
					},
				},
			},
			shadow: {
				borderColor: '$typeNormal',
				color: '$typeNormal',
				svg: {
					path: {
						fill: '$typeNormal',
					},
				},
			},
		},

		size: {
			default: {
				background: 'transparent',
				color: '$dark',
				display: 'flex',
			},

			lg: {
				borderRadius: '4px',
				borderStyle: 'solid',
				borderWidth: '1px',
				padding: '$4',
				width: '100%',

				em: {
					width: 32,

					svg: {
						height: 24,
					},
				},
			},

			'icon-sm': {
				borderRadius: '100%',
				borderStyle: 'solid',
				borderWidth: '1px',
				height: 24,
				width: 24,
				justifyContent: 'center',

				span: {
					display: 'none',
				},

				em: {
					width: 'auto',

					svg: {
						height: 12,
					},
				},
			},

			icon: {
				span: {
					display: 'none',
				},

				em: {
					width: 'auto',

					svg: {
						height: 24,
					},
				},
			},
		},
	},
});

export const IconType = ({
	name,
	size = 'default',
}: {
	name: string;
	size?: 'default' | 'lg' | 'icon' | 'icon-sm';
}) => (
	<Wrapper size={size} color={name as TTypes}>
		<em>{MAIN_ICONS[name as TTypes]}</em>
		{size !== 'icon' && size !== 'icon-sm' && <span>{name}</span>}
	</Wrapper>
);
