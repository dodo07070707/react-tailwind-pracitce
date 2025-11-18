import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="flex justify-between w-full items-center pl-10 pr-10 pt-16 pb-3">
        <a href="/" className="flex items-center">
          <img src="assets/logo1.png" className="w-10 h-auto pr-2"></img>
          <p className="">deplois</p>
        </a>
        <nav className="flex space-x-6">
          <a className="hover:drop-shadow-xl/19" href="/">
            Home
          </a>
          <a className="hover:drop-shadow-x1/19" href="/about">
            About
          </a>
          <a className="hover:drop-shadow-x1/19" href="/contact">
            Contact
          </a>
        </nav>
      </header>
      <div className="border-b border-gray-200 ml-8 mr-8"></div>
      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-3 p-4 ml-10 mr-10 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">메인 콘텐츠</h2>
        <p className="text-gray-700">여기에 원하는 내용을 넣으면 됩니다.</p>
      </main>
    </div>
  );
}
