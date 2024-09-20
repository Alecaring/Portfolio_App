import { useEffect, useState } from "react";
import videoSrc from '../assets/banner_portfolio.mp4';
import { Link } from "react-router-dom";
import TopNavGoHome from "./common/TopNavGoHome";

function Work() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentIndex, setContentIndex] = useState(0); // Stato per l'indice del contenuto corrente

  // Array di colori per i segmenti di 5 minuti
  const colors = [
    'rgba(255, 99, 132, 0.3)',   // Rosso chiaro
    'rgba(54, 162, 235, 0.3)',   // Blu chiaro
    'rgba(255, 206, 86, 0.3)',   // Giallo chiaro
    'rgba(75, 192, 192, 0.3)',   // Verde chiaro
    'rgba(153, 102, 255, 0.3)',  // Viola chiaro
    'rgba(255, 159, 64, 0.3)'    // Arancione chiaro
  ];

  // Array di contenuti per ogni 5 minuti
  const contents = [
    {
      timeRange: "0-5 minutes",
      text: "Welcome to our project overview.",
      videoSrc: '',
      imgSrc: "https://www.keblog.it/wp-content/uploads/2019/07/foto-lavori-mondo-agora-images-23.jpg"
    },
    {
      timeRange: "10-15 minutes",
      text: "Here is an overview of our services.",
      videoSrc: '',
      imgSrc: "https://www.keblog.it/wp-content/uploads/2019/07/foto-lavori-mondo-agora-images-31.jpg"
    },
    {
      timeRange: "15-20 minutes",
      text: "Here is an overview of our services.",
      videoSrc: '',
      imgSrc: "https://static8.depositphotos.com/1022597/1029/i/450/depositphotos_10290425-stock-photo-orange-background.jpg"
    },
    {
      timeRange: "20-25 minutes",
      text: "Here is an overview of our services.",
      videoSrc: '',
      imgSrc: "https://st2.depositphotos.com/33291222/43993/i/450/depositphotos_439938266-stock-photo-litchi-fruit-blue-background-patterned.jpg"
    },
    // Aggiungi ulteriori contenuti se necessario
  ];

  useEffect(() => {
    const handleWheel = (event) => {
      setScrollPosition(prevScrollPosition => prevScrollPosition + event.deltaY);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const newContentIndex = Math.floor(scrollPosition / 300) % contents.length; // 5 minuti = 300 secondi
    setContentIndex(newContentIndex);
  }, [scrollPosition]); // Aggiorna il contenuto in base alla posizione di scroll

  // Calcola l'angolo della lancetta dei minuti
  const minutes = Math.floor(scrollPosition / 60) % 60;
  const minuteAngle = (scrollPosition % 3600) / 60 * 6; // Ogni minuto è 6 gradi

  // Calcolare l'indice del colore in base ai segmenti di 5 minuti
  const segmentIndex = Math.floor(minutes / 5) % colors.length;

  // Calcolare l'angolo di inizio e fine per ogni segmento di 5 minuti
  const segmentStartAngle = (Math.floor(minutes / 5) * 30) % 360; // Ogni 5 minuti è 30 gradi
  const segmentEndAngle = (segmentStartAngle + 30) % 360;

  // Ottieni il contenuto corrente
  const content = contents[contentIndex] || { text: "Default content", videoSrc: "", imgSrc: "" };

  return (
    <div className="position-fixed w-100 h-5000vh d-flex bg-darkBlue">

      <TopNavGoHome />

      <div className="position-fixed top-50 left-50 translateXY w-900px h-900px radius-circle z-index-10 bg-trasparent">
        {/* Aggiungi le scie */}
        <div className="position-absolute w-100 h-100 radius-circle z-index--1 pointer-event-none">
          <div
            className="position-absolute w-100 h-100 radius-circle top-0 left-0 bg-trasparent pointer-event-none transition-bg-0-5-out"
            style={{
              background: `conic-gradient(
                  ${colors[segmentIndex]} ${segmentStartAngle}deg,
                  ${colors[segmentIndex]} ${segmentEndAngle}deg,
                  transparent ${segmentEndAngle}deg,
                  transparent ${segmentStartAngle + 30}deg
                )`,
              transform: `rotate(${minuteAngle}deg)`
            }}
          ></div>
        </div>

        {/* Ore */}
        {[...Array(12)].map((_, i) => (
          <div className="ms_tranform_hour position-absolute w-12px h-70px border-1px-grey text-center line-height-50px radius-2rem top-50 left-50 transform-origin-center d-flex align-items-center justify-content-center z-index-500" style={{ "--i": i + 1 }} key={`hour-${i}`}>
            <span className="d-b w-1px h-70 bg-black-50"></span>
          </div>
        ))}

        {/* Trattini */}
        {[...Array(120)].map((_, i) => (
          i % 10 !== 0 ? <div className="ms_transform_tick position-absolute w-1px h-20px bg-dark-grey radius-2rem top-50 left-50 transform-origin-center" style={{ "--i": i }} key={`tick-${i}`}></div> : null
        ))}

        {/* Lancette */}
        <div className="w-4px h-100 position-relative top-50 left-50 translateXY">
          <div
            className="position-absolute w-4px h-100 bg-lightGrey bottom-50 left-50 translateX-50 transform-origin-bottom-center h-2000px radius-2rem"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
          ></div>
          <div
            className="position-absolute w-4px h-100 bg-lightGrey bottom-50 left-50 translateX-50 transform-origin-bottom-center h-300px radius-2rem"
            style={{ transform: `rotate(${(scrollPosition / 3600) * 30}deg)` }}
          ></div>
        </div>
      </div>
      <div className="position-fixed w-50 h-60 bg-white top-50 left-50 translateXY z-index-10 radius-2rem overflow-hidden">
        {/* Contenuto centrale */}
        {/* <p>{content.text}</p> */}
        {/* Video */}
        {content.videoSrc && (
          <video autoPlay muted loop>
            <source src={content.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Immagine */}
        {content.imgSrc && !content.videoSrc && (
          <img src={content.imgSrc} alt="Content visual" />
        )}
      </div>
    </div>
  );
}

export default Work;