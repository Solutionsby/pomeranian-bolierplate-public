import { useState, useEffect } from 'react';
import { CookiIcon } from '../Icons/CookiIcon';
import './styles.css';
// add Dalay and Responsive

export const CookiBaner = () => {
  const [cookieBannerHiden, setCookiBannerHiden] = useState();
  function setCookiInfo() {
    localStorage.setItem('cookieState', 1);
    setCookiBannerHiden(true);
  }
  function checkCookiData() {
    return localStorage.getItem('cookieState');
  }

  useEffect(() => {
    if (checkCookiData()) {
      setCookiBannerHiden(true);
    }
  }, []);
  return (
    <div
      className={
        cookieBannerHiden
          ? 'cooki-baner-wrapper cooki-hiden'
          : 'cooki-baner-wrapper '
      }
    >
      <div className="content-box clearfix">
        <CookiIcon />
        <h2 className="cooki-baner-header-text">Pozwól na pliki cookies</h2>
        <p className="cooki-baner-paragraf-text">
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować
        </p>
        <p className="cooki-baner-paragraf-text">
          użycie do swoich preferencji. W tym celu kliknij przycisk po prawej
          stronie “dopasuj zgody”, aby następnie wybrać te które odpowiadają
          Twoim indywidualnym preferencjom.
        </p>
      </div>
      <div className="cooki-baner-button-wrapper">
        <button className="cooki-banner-buton" onClick={setCookiInfo}>
          W porządku
        </button>
        <button className="cooki-banner-buton">Dopasuj Zgody</button>
      </div>
    </div>
  );
};
