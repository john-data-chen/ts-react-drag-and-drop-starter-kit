const i18nConfig = {
  // order and from where user language should be detected
  order: [
    'localStorage',
    'querystring',
    'cookie',
    'navigator',
    'htmlTag',
    'path',
    'subdomain'
  ],
  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 2,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: window.location.hostname,
  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement
}

export default i18nConfig
