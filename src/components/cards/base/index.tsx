import { IBaseCard } from './interface';
import Styles from './base-card.module.scss';

interface Props extends IBaseCard {
  children: JSX.Element;
}

/**
 * @param {object}  Props
 * @returns JSX.Element
 * @description This component is a root card component which take a children component.
 */
const BaseCard = ({
  children,
  dataTestId,
  cardBorderRadius,
  cardShadow,
  hoverCardShadow,
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden ${Styles['card']} ${
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

export default BaseCard;
