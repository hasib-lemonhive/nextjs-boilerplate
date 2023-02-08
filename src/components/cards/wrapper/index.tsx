import { ICardWrapper } from './interface';
import Styles from './card-wrapper.module.scss';

interface Props extends ICardWrapper {
  children: JSX.Element;
}

/**
 * @param {object}  Props
 * @returns JSX.Element
 * @description This component is a card wrapper component which take a children component.
 */
const CardWrapper = ({
  children,
  dataTestId,
  cardBorderRadius,
  cardShadow,
  hoverCardShadow,
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden h-auto ${Styles['card']} ${
        Styles[cardBorderRadius]
      } ${Styles[cardShadow]} ${
        hoverCardShadow ? Styles[`hover-${hoverCardShadow}`] : ''
      }`}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
