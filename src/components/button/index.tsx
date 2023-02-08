import Link from 'next/link';
import { IRedirectButton, IButton } from './interface';
import Styles from './button.module.scss';
import IconStore from '@components/icons';
import clsx from 'clsx';

/**
 * Tailwind Classes
 */
const btnWrapperClasses = clsx(`inline-flex`);

/**
 * @param {object}  Omit<IButton, 'clickHandler'>
 * @returns JSX.Element
 */
const BaseButton = ({
  title,
  colorScheme,
  size,
  hoverColorScheme,
  iconName,
  iconIsLeft,
  shiftIconOnHover,
  'data-testid': dataTestId,
  disabled,
}: Omit<IButton, 'clickHandler'>) => {
  const btnClasses = clsx(
    'relative z-10 overflow-hidden inline-flex items-center justify-center gap-3 cursor-pointer',
    { [Styles['button']]: true },
    { [Styles[colorScheme]]: true },
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme !== undefined },
    { [Styles[size]]: true },
    { 'flex-row-reverse': iconIsLeft !== undefined },
    {
      [Styles['shift-icon-on-hover']]:
        iconIsLeft !== undefined && shiftIconOnHover !== undefined,
    },
    { 'pointer-events-none opacity-60': disabled !== undefined }
  );

  const btnBgClasses = clsx('absolute inset-0 ', {
    [Styles['button-bg']]: true,
  });

  return (
    <span className={btnClasses} data-testid={dataTestId} title={title}>
      <span>{title}</span>
      {iconName !== undefined && (
        <span className={Styles['button-icon']}>
          <IconStore iconName={iconName} />
        </span>
      )}
      <span className={btnBgClasses}></span>
    </span>
  );
};

// Normal Button
const Button = (props: IButton) => {
  const btnWrapperWithNotAllowedClass = clsx(btnWrapperClasses, {
    'cursor-not-allowed': props.disabled,
  });
  return (
    <span
      className={btnWrapperWithNotAllowedClass}
      onClick={(e) => {
        if (props.disabled !== true) {
          props.clickHandler(e);
        }
      }}
    >
      <BaseButton {...props} />
    </span>
  );
};

Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={btnWrapperClasses}
        target={props.isOpenNewTab ? '_blank' : '_self'}
      >
        <BaseButton {...props} />
      </a>
    </Link>
  );
};

export default Button;
