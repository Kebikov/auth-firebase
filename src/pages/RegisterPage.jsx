import { SignUp } from 'components/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <SignUp />
            <p>
                Вы уже зарегистрированы ? <Link to="/login">Вход в приложение</Link>   
            </p>            
        </div>
    )
}

export default RegisterPage
