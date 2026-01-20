export const Images = {
  logo: require('./logo.png'),
} as const;

export type ImageName = keyof typeof Images;
