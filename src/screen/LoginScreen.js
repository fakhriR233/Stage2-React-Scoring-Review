import LoginCard from "../components/login/LoginCard";
import LoginImage from "../components/login/LoginImage";
import LoginButton from "../components/login/button/LoginButton";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Login() {
    return (
      <div>
        <div style={styles.LoginScreen}>
          <Row>
              <Col lg={8}>
                  <LoginImage />                  
                  <LoginButton />
              </Col>
              <Col lg={4}>
                  <LoginCard />
              </Col>
          </Row>
        </div>
      </div>
    );
  }
  
  const styles = {
    LoginScreen: {
        margin: 0,
        padding : "250px 80px",
    }
  }

  export default Login;