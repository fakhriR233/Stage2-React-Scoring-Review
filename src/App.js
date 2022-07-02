import './App.css';
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from './screen/HomeScreen';
import Header from './components/Header';
import ComplainScreen from './screen/ComplainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='Body'>
      <ComplainScreen />
    </div>
  );
}

export default App;
