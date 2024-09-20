import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";
import Work from './components/Work';
import Home from './components/Home';
import Services from "./components/Services";


function App() {

  const [closedMenu, setClosedMenu] = useState(false);
    const [showBannerBlack, setShowBannerBlack] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const closedMenuBtnElemRef = useRef(null);

  const logos = [
    {
      key: 0,
      path: '/php_logo.png',
      alt: 'php logo',
    },
    {
      key: 1,
      path: '/JavaScript.png',
      alt: 'JavaScript logo',
    },
    {
      key: 2,
      path: '/TypeScript.png',
      alt: 'TypeScript logo',
    },
    {
      key: 3,
      path: '/react_logo.png',
      alt: 'React logo',
    },
    {
      key: 4,
      path: '/vue_logo.png',
      alt: 'Vue logo',
    },
    {
      key: 19,
      path: '/Bootstrap.png',
      alt: 'Bootstrap logo',
    },
    {
      key: 5,
      path: '/HTML5.png',
      alt: 'HTML5 logo',
    },
    {
      key: 6,
      path: '/react_native_logo.png',
      alt: 'React Native logo',
    },
    {
      key: 7,
      path: '/Git.png',
      alt: 'Git logo',
    },
    {
      key: 8,
      path: '/laravel_logo.png',
      alt: 'Laravel logo',
    },
    {
      key: 9,
      path: '/Vite_logo.png',
      alt: 'Vite logo',
    },
    {
      key: 10,
      path: '/GitHub.svg',
      alt: 'GitHub logo',
    },
    {
      key: 11,
      path: '/NPM.png',
      alt: 'NPM logo',
    },
    {
      key: 12,
      path: '/Composer.png',
      alt: 'Composer logo',
    },
    {
      key: 13,
      path: '/Postman.png',
      alt: 'Postman logo',
    },
    {
      key: 14,
      path: '/CSS3.png',
      alt: 'CSS3 logo',
    },
    {
      key: 15,
      path: '/Sass.png',
      alt: 'Sass logo',
    },
    {
      key: 16,
      path: '/MySQL.png',
      alt: 'MySQL logo',
    },
    {
      key: 17,
      path: '/VisualStudioCode.png',
      alt: 'VisualStudioCode logo',
    },
    {
      key: 18,
      path: '/Canva.png',
      alt: 'Canva logo',
    }
  ];

  const references = [
    {
      key: 0,
      className: 'bi bi-whatsapp',
      d: 'M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232',
      d2: '',
      contentTxt: '+39 3921340458',
    },
    {
      key: 1,
      className: 'bi bi-instagram',
      d: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334',
      d2: '',
      contentTxt: '@alessio.is.there'
    },
    {
      key: 2,
      className: 'bi bi-envelope-at',
      d: 'M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z',
      d2: 'M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z',
      contentTxt: 'private_a.a.c@icloud.com'
    },
    {
      key: 3,
      className: 'bi bi-linkedin',
      d: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z',
      d2: '',
      contentTxt: 'Alessio Caringella'
    },
  ];

  const ceckTitle = {
    classNameSvg: 'bi bi-patch-check-fill',
    title: 'Certificated',
    d: 'M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708',

  };
  const SvgExit = {
    d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z',
    className: 'bi bi-x-circle-fill',
    size: '40',
    fill: 'White'
  };

  const listLanguages = [
    {
        key: 0,
        src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
        alt: 'italian flag'
    },
    {
        key: 1,
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png',
        alt: 'france flag'
    },
    {
        key: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vJtERgSxnmFjFfd2jFEi6m4vtD5ugurZzg&s',
        alt: 'english flag'
    },
    {
        key: 3,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png',
        alt: 'spanish flag'
    },
    {
        key: 4,
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png',
        alt: 'russian flag'
    }
];

  const handleMenuToggle = () => {
    setClosedMenu(prevClosedMenu => !prevClosedMenu);
    setShowBannerBlack(prevShow => !prevShow);
  };

  const ToggleLocation = () => {
    setOpenLocation(prevOpenLocation => !prevOpenLocation);
    setShowBannerBlack(prevShow => !prevShow);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home listLanguages={listLanguages} closedMenuBtnElemRef={closedMenuBtnElemRef} openLocation={openLocation} showBannerBlack={showBannerBlack} closedMenu={closedMenu} logos={logos} references={references} ceckTitle={ceckTitle} SvgExit={SvgExit} handleMenuToggle={handleMenuToggle} ToggleLocation={ToggleLocation} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}






export default App;
