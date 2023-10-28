import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../../types';
import { RegisterForm as RegisterFormComponent } from '../../components';

  const Register = () => {
    const navigate = useNavigate()

      const handleRegister = async (values: RegisterForm) => {
        console.log(`Successfully Registered`, values)
        const apiUrl = 'https://week-18-eoa03.cyclic.app/auth/register'
    
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
                navigate('/');
            } else {
                alert(data.errors)
            }
        } catch (error) {
            alert("Register Failed")
        }
    
      }

      return (
        <RegisterFormComponent onSubmit={handleRegister} />
      )
 
    };

  export default Register