//= Воход существующих пользователей 
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// импорт функций из firebase

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
//...создаем запрос к firebase с данными, который вернет нам promis c информацией о пользователе
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Проверьте введенные данные.'))
    }

    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    )
}

export {Login}
