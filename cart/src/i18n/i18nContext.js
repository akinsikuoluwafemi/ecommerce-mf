import { I18nextProvider } from "react-i18next";
import cartInstance from ".";



const CartI18nWrapper = ({ children }) => (
  <I18nextProvider i18n={cartInstance}>
    {children}
  </I18nextProvider>
)

export default CartI18nWrapper;