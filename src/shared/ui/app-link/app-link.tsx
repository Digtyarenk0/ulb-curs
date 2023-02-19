import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cs from 'classnames';
import cls from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
 to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps 
} = props;

  return (
    <Link to={to} className={cs(cls.AppLink, cls[theme])} {...otherProps}>
      {children}
    </Link>
  );
};
