import clsx from 'clsx';
import { IContainer } from './interface';
import Styles from './container.module.css';

export default function Container({
  children,
  isFluid = false,
  isNoPadding = false,
}: IContainer) {
  const containerClasses = clsx(
    { [Styles['container']]: true },
    { [Styles['full-width']]: isFluid },
    { [Styles['no-padding']]: isNoPadding }
  );
  return <div className={containerClasses}>{children}</div>;
}
