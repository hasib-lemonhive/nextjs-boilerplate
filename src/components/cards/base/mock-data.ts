import { CardBorderRadiusEnum, CardShadowEnum, IBaseCard } from './interface';

export const baseCardProps: IBaseCard = {
  dataTestId: 'base-card',
  cardBorderRadius: CardBorderRadiusEnum.RadiusOne,
  cardShadow: CardShadowEnum.ShadowOne,
};
