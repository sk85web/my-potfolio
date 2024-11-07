import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { locales } from '@/config';

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect label={t('label')} defaultValue={locale}>
      {locales.map((cur) => {
        return (
          <option key={cur} value={cur}>
            {t(`locale.${cur}`)}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
