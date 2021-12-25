import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedWidget from './featured-widget';
import SearchResults from '../search-results';
import WidgetFilter from './widget-filter';
import WidgetFromQuery from '../widget/widget-from-query';
import useWidgets from '../hooks/useWidgets';
import useFeaturedWidget from '../hooks/useFeaturedWidget';
import WidgetContext from '../context/widgetContext';

function App() {
  const widgets = useWidgets();
  const featuredWidget = useFeaturedWidget(widgets);

  return (
    <Router>
      <WidgetContext.Provider value={widgets}>
        <div className="container">
          <Header subtitle="Widgets for everyone!" />
          <WidgetFilter />
          <Routes>
            <Route path="/searchresults/:value" element={<SearchResults/>} />
            <Route path="/widget/:id" element={<WidgetFromQuery/>} />
            <Route path="/" element={<FeaturedWidget widget={featuredWidget}/>} />
          </Routes>
        </div>
      </WidgetContext.Provider>
    </Router>
  );
}

export default App;
