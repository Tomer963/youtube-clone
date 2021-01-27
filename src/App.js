import Header from './Header';

import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default App;
