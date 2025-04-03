import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ItineraryTable from './components/ItineraryTable';

function App() {
  return (
    <Router basename="/cursor-rontest">
      <div className="App">
        <div className="sakura-falling"></div>
        <nav className="navbar">
          <div className="nav-content">
            <h1 className="logo">Sakura Website / 桜のウェブサイト</h1>
            <div className="nav-links">
              <Link to="/">Home / ホーム</Link>
              <Link to="/itinerary">Itinerary / 旅程</Link>
              <a href="#features">Features / 特徴</a>
              <a href="#about">Anime / アニメ</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <section id="home" className="hero">
                <div className="hero-content">
                  <h1>Welcome / ようこそ</h1>
                  <p>To the world of Japanese culture and anime / 日本の文化とアニメの世界へ</p>
                  <Link to="/itinerary" className="cta-button">Plan Your Trip / 旅行を計画する</Link>
                </div>
              </section>

              <section id="features" className="features">
                <h2>Features / 特徴</h2>
                <div className="feature-grid">
                  <div className="feature-card">
                    <h3>Sakura Design / 桜のデザイン</h3>
                    <p>Beautiful falling sakura petals design / 美しい桜の花びらが舞うデザイン</p>
                  </div>
                  <div className="feature-card">
                    <h3>Anime Style / アニメスタイル</h3>
                    <p>Modern anime-inspired UI design / モダンなアニメ風のUIデザイン</p>
                  </div>
                  <div className="feature-card" id="about">
                    <div className="anime-character"></div>
                    <h3>Japanese Culture / 日本文化</h3>
                    <p>Fusion of tradition and modernity / 日本の伝統と現代の融合</p>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/itinerary" element={<ItineraryTable />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 Sakura Website / 桜のウェブサイト. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
