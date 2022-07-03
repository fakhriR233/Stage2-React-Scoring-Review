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
import EditProductScreen from "./screen/adminScreen/EditProductScreen";
import CompareProductScreen from "./screen/CompareProductScreen";

function App() {
  return (
    <div className="Body">
      <CompareProductScreen />
    </div>
  );
}

export default App;
