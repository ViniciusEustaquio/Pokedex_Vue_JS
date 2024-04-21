
function detectLanguage() {
	const browserLang = navigator.language || navigator.userLanguage;
	return browserLang.substring(0, 2);
  }

  const supportedLanguages = ['pt', 'en', 'es'];

  function isLanguageSupported(lang) {
	return supportedLanguages.includes(lang);
  }

  

  function loadLanguage(lang) {
	if (isLanguageSupported(lang)) {
	  console.log(`Idioma carregado: ${lang}`);
	} else {
	  console.warn(`Idioma não suportado: ${lang}`);
	}
  }

  const detectedLang = detectLanguage();
  loadLanguage(detectedLang);
