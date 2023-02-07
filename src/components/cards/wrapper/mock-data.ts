import {
  CardBorderRadiusEnum,
  CardShadowEnum,
  ICardWrapper,
} from './interface';

export const baseCardProps: ICardWrapper = {
  dataTestId: 'base-card',
  cardBorderRadius: CardBorderRadiusEnum.RadiusOne,
  cardShadow: CardShadowEnum.ShadowOne,
};
