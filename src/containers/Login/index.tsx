import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../types';
import { LoginForm as FormLogin } from '../../components';

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (values: LoginForm) => {
    console.log(`Successfully logged in`, values)
    const apiUrl = 'https://week-18-eoa03.cyclic.app/auth/login'

    try {
        const response = await fetch (apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        console.log(response)
        const data = await response.json()

        if (response.ok){
            const token = data.accessToken
            localStorage.setItem('authToken', token)
            if(token.role === 'admin'){
                navigate('/admin-dashboard')
            } else{
                navigate('/user-dashboard')
            }
        } else {
            alert(data.errors)
        }
    } catch (error) {
        console.error(error)
        alert("Login Failed")
    }

  }

  return (
    <FormLogin onSubmit={handleLogin} />

  );
};

export default Login;