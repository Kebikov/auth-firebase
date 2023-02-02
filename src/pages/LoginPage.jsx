import { Login } from 'components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Вход в приложение при подтверждении Email</h1>
            <Login />
            <p>
                Ссылка для <Link to="/register">регистрации</Link>
            </p>
        </div>
    )
}

export default LoginPage
