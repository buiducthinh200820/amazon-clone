import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import StoreIcon from '@mui/icons-material/Store';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; // Import các hàm cần thiết
import { auth } from "./firebase"; // Import auth từ firebase.js

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Vui lòng nhập email và mật khẩu.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password); // Dùng cú pháp v9
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const register = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Vui lòng nhập email và mật khẩu.");
            return;
        }

        try {
            const authUser = await createUserWithEmailAndPassword(auth, email, password); // Dùng cú pháp v9
            if (authUser) {
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StoreIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Đăng nhập</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <h5>Mật khẩu</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit' className='login__signInButton' onClick={signIn}>
                        Đăng nhập
                    </button>
                </form>

                <p>
                    Bằng việc đăng nhập, bạn đồng ý với Điều khoản Sử dụng và Bán hàng của eShop.
                </p>

                <button className='login__registerButton' onClick={register}>
                    Tạo tài khoản eShop
                </button>
            </div>
        </div>
    );
}

export default Login;
