import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import useSwitchLanguage from "./hooks/useSwitchLanguage";
import { useTranslation } from "react-i18next";


const MiniCart = React.lazy(() =>
  import("cart/MiniCart").catch(() => ({
    default: () => <div>MiniCart is currently unavailable.</div>,
  }))
);

const Login = React.lazy(() =>
  import("cart/Login").catch(() => ({
    default: () => <div>Login is currently unavailable.</div>,
  }))
);

export default function Header() {

  const lngs = {
    en: { nativeName: "English" },
    pt: { nativeName: "Português" },
  };


  const { t, i18n } = useTranslation();

  // const { switchAllLanguages } = useSwitchLanguage();
  // const handleLanguageChange = (lng) => {
  //   return () => {
  //     console.log("changing language to", lng);
  //     switchAllLanguages(lng);
  //   };
  // };

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">
            {/* Fidget Spinner World */}
            {t("title")}
          </Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            {/* Cart */}
            {t("cart")}
          </Link>
        </div>
        <div className="flex gap-3 justify-center items-center relative">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className="bg-blue-700 text-white px-2 py-1 rounded text-xs"
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          ))}

          <div>
            <Suspense fallback={<div>Loading MiniCart...</div>}>
              <MiniCart />
            </Suspense>
          </div>

          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
