import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Button } from 'shared/ui/button/button';
import cls from './error-page.module.scss';

interface ErrorPageProps {
  className?: string;
  error: any, 
  resetErrorBoundary: any
}

export const ErrorPage = ({ className, error, resetErrorBoundary }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
    resetErrorBoundary()
  };

  return (
    <div className={classNames(cls.ErrorPage, [className])}>
      <p>{error.message}</p>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
