import { I18nextProvider } from "react-i18next";
import pdpInstance from ".";


const PdpI18nWrapper = ({ children }) => (
  <I18nextProvider i18n={pdpInstance}>
    {children}
  </I18nextProvider>
)

export default PdpI18nWrapper;