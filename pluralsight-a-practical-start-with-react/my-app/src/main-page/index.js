import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedWidget from './featured-widget';
import SearchResults from '../search-results';
import WidgetFilter from './widget-filter';
import WidgetFromQuery from '../widget/widget-from-query';
import useWidgets from '../hooks/useWidgets';
import useFeaturedWidget from '../hooks/useFeaturedWidget';

function App() {
  const widgets = useWidgets();
  const featuredWidget = useFeaturedWidget(widgets);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Widgets for everyone!" />
        <WidgetFilter allWidgets={widgets} />
        <Routes>
          <Route path="/searchresults/:value" element={<SearchResults allWidgets={widgets}/>} />
          <Route path="/widget/:id" element={<WidgetFromQuery allWidgets={widgets} />} />
          <Route path="/" element={<FeaturedWidget widget={featuredWidget}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
