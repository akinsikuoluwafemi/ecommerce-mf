import cartInstance from "../i18n";

const useSwitchLanguage = () => {
  return (languageId) => cartInstance.changeLanguage(languageId);
}

export default useSwitchLanguage;