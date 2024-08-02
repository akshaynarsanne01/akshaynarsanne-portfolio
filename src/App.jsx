import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.body.classList.add('animated-background');
    return () => {
      document.body.classList.remove('animated-background');
    };
  }, []);
  return (
    <>
      <div className=''>
        <Home />
      </div>
    </>
  )
}

export default App
