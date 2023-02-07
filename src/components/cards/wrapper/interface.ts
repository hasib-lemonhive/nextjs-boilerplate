export interface ICardWrapper {
  dataTestId: string;
  cardShadow: CardShadowEnum;
  hoverCardShadow?: CardShadowEnum;
  cardBorderRadius: CardBorderRadiusEnum;
}

export enum CardShadowEnum {
  ShadowOne = 'shadow-one',
  None = 'shadow-none',
}

export enum CardBorderRadiusEnum {
  RadiusOne = 'radius-one',
  RadiusTwo = 'radius-two',
  None = 'radius-none',
}
