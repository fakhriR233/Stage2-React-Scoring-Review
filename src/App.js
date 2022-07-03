import "./App.css";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import Header from "./components/Header";
import ComplainScreen from "./screen/ComplainScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProfileScreen from "./screen/MyProfileScreen";
import DetailProductScreen from "./screen/DetailProductScreen";
import ListCategoryScreen from "./screen/adminScreen/ListCategoryScreen";

function App() {
  return (
    <div className="Body">
      <ListCategoryScreen />
    </div>
  );
}

export default App;
