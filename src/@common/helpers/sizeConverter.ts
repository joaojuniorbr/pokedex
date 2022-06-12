export const sizeConverter = {
	decimetresToMeter: (size: number) =>
		(size * 0.1).toFixed(2).toString().replace('.', ','),

	hectogramsToKilogram: (size: number) =>
		(size * 0.1).toFixed(2).toString().replace('.', ','),
};
