import { useEffect, useState } from "react";
import videoSrc from '../assets/banner_portfolio.mp4';

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
        videoSrc: videoSrc,
        imgSrc: ""
      },
      {
        timeRange: "5-10 minutes",
        text: "Here is an overview of our services.",
        videoSrc: videoSrc,
        imgSrc: "https://www.example.com/path/to/your/image2.jpg"
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
      <div className="mainWorkContainerWindow">
        <div className="mainWorkContainerWindow_clock">
          {/* Aggiungi le scie */}
          <div className="scie">
            <div
              className="minute-trail"
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
            <div className="hour" style={{ "--i": i + 1 }} key={`hour-${i}`}>
              <span className="hour_dot"></span>
            </div>
          ))}
  
          {/* Trattini */}
          {[...Array(120)].map((_, i) => (
            i % 10 !== 0 ? <div className="tick" style={{ "--i": i }} key={`tick-${i}`}></div> : null
          ))}
  
          {/* Lancette */}
          <div className="cotainer_hand">
            <div
              className="hand minute-hand"
              style={{ transform: `rotate(${minuteAngle}deg)` }}
            ></div>
            <div
              className="hand hour-hand"
              style={{ transform: `rotate(${(scrollPosition / 3600) * 30}deg)` }}
            ></div>
          </div>
        </div>
        <div className="mainWorkContainerWindow_content1">
          {/* Contenuto centrale */}
          <p>{content.text}</p>
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
        <div className="mainWorkContainerWindow_right"></div>
        <div className="mainWorkContainerWindow_left"></div>
      </div>
    );
  }

  export default Work;