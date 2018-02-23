import en from './lang/en';
import cn from './lang/zh-CN';

const langs = {
  'en': en,
  'zh-CN': cn
}

export default function (type, lang) {
  return langs[lang][type];
}