import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import cls from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, [className])}>{t('Страница не найдена')}</div>
  );
};
