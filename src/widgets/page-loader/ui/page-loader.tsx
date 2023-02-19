import { Loader } from 'shared/ui/loader/loader';
import classNames from 'classnames';
import cls from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, [className])}>
    <Loader />
  </div>
);
