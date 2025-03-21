import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-banner">Loading...</div>
      ) : (
        <>
          <nav className="navbar">
            <h1>My Website</h1>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <header className="hero">
            <h2>Welcome to My Website</h2>
            <p>Your go-to place for amazing content</p>
          </header>
          <div className="content">
            <h3>Why Choose Us?</h3>
            <p>We provide top-notch services with great user experience.</p>
            <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
          </div>
          <footer>
            <p>Made by Syeda Aqeela</p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;