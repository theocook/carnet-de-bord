import React, { useState } from 'react'; // N'oublie pas d'importer useState
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { sessionData } from './data';
import ScrollToTop from './ScrollToTop';
import ImageLoader from './ImageLoader';
import './index.css';

// --- NOUVEAU COMPOSANT HOME (Design Editorial) ---
const Home = () => {
  // On génère les 11 IDs
  const items = Array.from({ length: 11 }, (_, i) => i + 1);

  // État pour gérer l'image affichée au survol (par défaut l'image 1)
  // On met une image par défaut si la data n'existe pas encore
  const [hoveredId, setHoveredId] = useState(1);

  // Fonction pour récupérer les infos (ou des placeholders si pas encore rempli)
  const getSessionInfo = (id) => {
    const data = sessionData[id];
    return {
      title: data ? data.exercise : "Séance à venir",
      subtitle: data ? data.method : "...",
      date: data ? data.date : "2025",
      image: data ? data.image : "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000"
    };
  };

  const activeInfo = getSessionInfo(hoveredId);

  return (
    <div className="home-editorial">

      {/* COLONNE GAUCHE : La Liste Interactive */}
      <div className="list-container">
        <header className="home-header">
          <span className="tiny-tag">Carnet de bord — UNIL 2025</span>
          <h1>Théo Cook</h1>
        </header>

        <div className="sessions-list">
          {items.map((num) => {
            const info = getSessionInfo(num);
            return (
              <Link
                to={`/page/${num}`}
                key={num}
                className="session-row"
                onMouseEnter={() => setHoveredId(num)}
              >
                <div className="row-left">
                  <span className="row-number">{num < 10 ? `0${num}` : num}</span>
                  <span className="row-date">{info.date}</span>
                </div>
                <div className="row-center">
                  <span className="row-title">{info.title}</span>
                  <span className="row-subtitle">{info.subtitle}</span>
                </div>
                <div className="row-right">
                  <span className="arrow-icon">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* COLONNE DROITE : La Prévisualisation Fixe */}
      <div className="preview-container">
        <div className="preview-card">
          <div className="img-wrapper">
            {/* L'image change selon le survol grâce à activeInfo.image */}
            <img src={activeInfo.image} alt="Preview" key={activeInfo.image} className="fade-in-img" />
          </div>
          <div className="preview-caption">
            <span>Séance {hoveredId}</span>
            <p>Explorer le contenu</p>
          </div>
        </div>
      </div>

    </div>
  );
};

// Remplace le composant SinglePage existant par celui-ci :
const SinglePage = () => {
  const { id } = useParams();
  const data = sessionData[id];
  // Tu auras besoin de convertir l'ID en nombre pour faire des maths
  const currentId = parseInt(id, 10);
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < 11 ? currentId + 1 : null;

  // Petit Hook pour la barre de progression de lecture
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FloatingBackBtn = () => (
    <Link to="/" className="fixed-close-btn">
      <span className="close-icon">×</span>
      <span className="close-text">Fermer</span>
    </Link>
  );

  if (!data) {
    return (
      <div className="creative-page empty-state">
        <FloatingBackBtn />
        <h1 className="big-number">?</h1>
        <p>Pas de contenu pour ce jour.</p>
      </div>
    );
  }

  return (
    <div className="creative-page">
      {/* Barre de progression en haut */}
      <div className="reading-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }}></div>

      <FloatingBackBtn />

      {/* HEADER avec animation en cascade */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-date anim-delay-1">{data.date}</span>
          <h1 className="hero-title anim-delay-2">{data.exercise}</h1>
          <p className="hero-method anim-delay-3">— {data.method}</p>
        </div>
        {/* Le numéro flotte doucement */}
        <div className="hero-number floating-anim">{id}</div>
      </header>

      {/* SECTION APPRIS avec effet "Rideau" sur l'image */}
      <section className="learn-section">
        <div className="learn-grid">
          <div className="learn-image-container reveal-trigger">
              {/* 1. On remplace l'image classique par le composant intelligent */}
              <ImageLoader 
                  src={data.image} 
                  alt="Séance" 
                  className="learn-img" 
              />
              {/* 2. On conserve tes éléments d'animation et de décoration */}
              <div className="reveal-curtain"></div>
              <div className="img-overlay"></div>
          </div>
          <div className="learn-text anim-slide-up">
            <h2 className="section-label">Ce que j'ai pratiqué</h2>
            <p className="big-paragraph">{data.learned.text}</p>
          </div>
        </div>
      </section>

      {/* SECTION RESSENTI */}
      <section className="feelings-section">
        <div className="container">
          <h2 className="section-label light anim-slide-up">Ce que j'ai ressenti</h2>
          <div className="feelings-stack">
            <div className="feeling-row hover-scale">
              <div className="feeling-title">
                <span className="card-icon">01</span>
                <h3>Physique</h3>
              </div>
              <div className="feeling-content">
                <p>{data.feelings.physique}</p>
              </div>
            </div>

            <div className="feeling-row hover-scale delay-100">
              <div className="feeling-title">
                <span className="card-icon">02</span>
                <h3>Respiration</h3>
              </div>
              <div className="feeling-content">
                <p>{data.feelings.respiration}</p>
              </div>
            </div>

            <div className="feeling-row hover-scale delay-200">
              <div className="feeling-title">
                <span className="card-icon">03</span>
                <h3>Concentration / Mental</h3>
              </div>
              <div className="feeling-content">
                <p>{data.feelings.mental}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BILAN */}
      <section className="analysis-section">
        <div className="container">
          <h2 className="section-label">Ce que j'ai appris</h2>
          <div className="fluid-grid">
            <div className="fluid-box main-box pop-in">
              <h4>Quoi</h4>
              <p>{data.analysis.quoi}</p>
            </div>
            <div className="fluid-box highlight-box pop-in delay-100">
              <h4 style={{ color: 'white' }}>Satisfaction personnelle</h4>
              <p className="highlight-text">"{data.analysis.satisfaction}"</p>
            </div>
            <div className="fluid-box pop-in delay-200">
              <h4>Progression envisagée</h4>
              <p>{data.analysis.progression}</p>
            </div>
            <div className="fluid-box pop-in delay-300">
              <h4>Transfert</h4>
              <p>{data.analysis.utility}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Remplace le div className="page-footer" existant par celui-ci : */}
      <div className="page-footer navigation-footer">
        {/* Lien Précédent (seulement si ce n'est pas la page 1) */}
        {prevId ? (
          <Link to={`/page/${prevId}`} className="nav-link prev-link">
            <span className="nav-arrow">←</span> Séance {prevId}
          </Link>
        ) : (
          <div></div> /* Div vide pour garder l'espacement */
        )}

        <Link to="/" className="big-back-link">Retour au sommaire</Link>

        {/* Lien Suivant (seulement si ce n'est pas la page 11) */}
        {nextId ? (
          <Link to={`/page/${nextId}`} className="nav-link next-link">
            Séance {nextId} <span className="nav-arrow">→</span>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- Juste ici, avant les Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;