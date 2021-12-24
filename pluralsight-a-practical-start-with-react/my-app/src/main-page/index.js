import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedWidget from './featured-widget';

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch("/data.json");
      const dataWidgets = await r.json();
      setWidgets(dataWidgets);
    };
    fetchData();
  }, []);

  const featuredWidget = useMemo(() => {
    if (widgets.length) {
      const index = Math.floor(Math.random() * widgets.length);
      return widgets[index];
    }
  }, [widgets]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Widgets for everyone!" />
        <Routes>
          <Route path="/" element={<FeaturedWidget widget={featuredWidget}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
