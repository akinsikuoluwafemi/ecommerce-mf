import { I18nextProvider } from "react-i18next";
import homeInstance from ".";


const HomeI18nWrapper = ({ children }) => (
  <I18nextProvider i18n={homeInstance}>{children}</I18nextProvider>
);

export default HomeI18nWrapper;