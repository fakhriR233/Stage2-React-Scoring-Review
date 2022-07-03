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
import ProductListScreen from "./screen/adminScreen/ProductListScreen";
import EditCategoryScreen from "./screen/adminScreen/EditCategoryScreen";

function App() {
  return (
    <div className="Body">
      <EditCategoryScreen />
    </div>
  );
}

export default App;
