import './App.css';
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from './screen/HomeScreen';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='Body'>
      <LoginScreen />
    </div>
  );
}

export default App;
