import classNames from 'classnames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher/lang-switcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation('main');
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed(!collapsed);

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, className)}>
      <button type="button" onClick={onToggle}>
        {t('Toggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
