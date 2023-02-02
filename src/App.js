import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { TopNav } from './components/TopNav';

import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <TopNav/>
   
      <ProductList/>
        </div>
  );
}

export default App;
