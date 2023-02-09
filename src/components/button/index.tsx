import Link from 'next/link';
import clsx from 'clsx';
import { IRedirectButton, IButton } from './interface';
import Styles from './button.module.scss';
import IconStore from '@components/icons';

/**
 * Tailwind Classes
 */
const btnWrapperClasses = clsx(
  `inline-flex focus:outline-none focus-visible:outline-none focus:shadow-none focus-visible:shadow-none`
);

/**
 * @param {object}  Omit<IButton, 'clickHandler'>
 * @returns JSX.Element
 */
const BaseButton = ({
  label,
  colorScheme,
  size,
  hoverColorScheme,
  iconName,
  iconIsLeft,
  shiftIconOnHover,
  'data-testid': dataTestId,
  isDisabled,
}: Omit<IButton, 'clickHandler'>) => {
  const btnClasses = clsx(
    'relative z-10 group/button overflow-hidden inline-flex items-center justify-center gap-3 cursor-pointer text-white hover:text-white leading-[1.15]',
    { [Styles['button']]: true },
    { [Styles[colorScheme]]: true },
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme !== undefined },
    { [Styles[size]]: true },
    { 'flex-row-reverse': iconIsLeft !== undefined },
    {
      [Styles['shift-icon-on-hover']]:
        iconName !== undefined && shiftIconOnHover !== undefined,
    },
    { 'pointer-events-none opacity-60': isDisabled !== undefined }
  );

  const btnBgClasses = clsx(
    'absolute z-[-1] inset-0 invisible opacity-0 group-hover/button:visible group-hover/button:opacity-100',
    {
      [Styles['button-bg']]: true,
    }
  );

  return (
    <span className={btnClasses} data-testid={dataTestId} aria-label={label}>
      <span>{label}</span>
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
    'cursor-not-allowed': props.isDisabled,
  });
  return (
    <button
      type="button"
      className={btnWrapperWithNotAllowedClass}
      onClick={(e) => {
        if (props.isDisabled !== true) {
          props.clickHandler(e);
        }
      }}
    >
      <BaseButton {...props} />
    </button>
  );
};

// Redirect Button
Button.Redirect = (props: IRedirectButton) => {
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
