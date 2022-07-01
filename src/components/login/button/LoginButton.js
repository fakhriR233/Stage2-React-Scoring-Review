import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const LoginButton = () => {
  return (
    <>
        <div style={styles.LoginRegister}>
            <Button variant="danger" type="submit" className='w-25 mt-4'>
                Login
            </Button>
            <Button variant="link" type="submit" className='w-25 ms-4 mt-4' style={{textDecoration:"none", color:"white"}} >
                Register
            </Button>
        </div>
    </>
  )
}

const styles = {
    LoginRegister : {
        display : "flex",
        maxWidth : "50%",
        color: "white"
    }
}

export default LoginButton