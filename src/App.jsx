import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="/" className="logo-wrap">
          <img src="assets/logo1.png" className="logo" />
          <p className="logo-text">deplois</p>
        </a>
        <nav className="nav">
          <a href="/" className="nav-item">
            Home
          </a>
          <a href="/about" className="nav-item">
            About
          </a>
          <a href="/contact" className="nav-item">
            Contact
          </a>
        </nav>
      </header>

      <div className="divider"></div>

      <main className="main">
        <h2 className="main-title">메인 콘텐츠</h2>
        <p className="main-text">여기에 원하는 내용을 넣으면 됩니다.</p>
      </main>
    </div>
  );
}
