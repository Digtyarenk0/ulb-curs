import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('About')}
        </Page>
    );
};

export default AboutPage;
