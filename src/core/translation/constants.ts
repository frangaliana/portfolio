import { Language } from '../../providers/translation';

export const defaultLanguage: Language = 'en';
export const localesPath = import(`../../assets/locales/${defaultLanguage}/locales.json`);
