import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { lazily } from 'react-lazily';

export const MainPage = () => {
  const { t } = useTranslation('main');
  return <div>{t('Main Page')}</div>;
};
