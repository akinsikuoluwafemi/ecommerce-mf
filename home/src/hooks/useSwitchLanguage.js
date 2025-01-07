import useSwitchCartLanguage from "cart/hooks/useSwitchCartLanguage";
import homeInstance from "../i18n";

const useSwitchLanguage = () => {
  const switchCartLanguageHook = useSwitchCartLanguage();

  // Application A
  const switchHomeLanguage = (languageCode) => homeInstance.changeLanguage(languageCode);

  //  Application B
  const switchCartLanguage = (languageCode) => switchCartLanguageHook(languageCode);

  // both applications
  const switchAllLanguages = (languageCode) => {
    switchHomeLanguage(languageCode);
    switchCartLanguage(languageCode);
  }
  return {
    switchHomeLanguage,
    switchCartLanguage,
    switchAllLanguages
  }
}

export default useSwitchLanguage;