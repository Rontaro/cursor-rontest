import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sakura-falling"></div>
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">Sakura Website / 桜のウェブサイト</h1>
          <div className="nav-links">
            <a href="#home">Home / ホーム</a>
            <a href="#features">Features / 特徴</a>
            <a href="#about">Anime / アニメ</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome / ようこそ</h1>
          <p>To the world of Japanese culture and anime / 日本の文化とアニメの世界へ</p>
          <button className="cta-button">Get Started / 始めましょう</button>
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
          <div className="feature-card">
            <div className="anime-character"></div>
            <h3>Japanese Culture / 日本文化</h3>
            <p>Fusion of tradition and modernity / 日本の伝統と現代の融合</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Sakura Website / 桜のウェブサイト. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
