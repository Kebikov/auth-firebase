//= регистрация нового пользователя 
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';
//...импорт сушностей из firebase
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const SignUp = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleRegister = (email, password) => {
        const auth = getAuth();
//...создаем запрос к firebase с данными, который вернет нам promis c информацией о регистрации
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="Зарегистрироватся"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}
