export async function getTranslations(lang) {
    let translations;
    try {
      translations = await import(`../locales/${lang}.json`);
    } catch (error) {
      // Si el idioma no existe, por defecto usa inglés
      translations = await import('../locales/en.json');
    }
    return translations.default;
  }