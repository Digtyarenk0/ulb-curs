import { BugButton } from 'app/providers/error-boundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return <div>
    <BugButton />
    {t('About us')}</div>;
};
