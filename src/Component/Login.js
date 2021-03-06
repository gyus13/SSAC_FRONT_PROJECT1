import React, {useState} from "react";
import "./Login.css";
import axios from "axios";
import {useHistory} from "react-router-dom";


function Login() {

    let [id,setId] = useState('');
    let [password,setPassword]  = useState('');
    let [message,setMessage] = useState('');
    let [success,setSuccess] = useState(true);

    let history = useHistory();

    return (
        <div>
            <div className={"login"}>
                <p className={"login-head"}>๐๐จ๐ค๐ข๐ฃ๐๐๐ก๐๐</p>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();

                        axios.post('http://dev.gyus.xyz/app/login', {
                            email: id,
                            password : password
                        })
                            .then(function (response) {
                                console.log(response);
                                setSuccess(response.data.isSuccess);
                                setMessage(response.data.message);
                            })
                    }
                }>
                    <input type={"text"} onChange ={ (e) => {setId(e.target.value)} } placeholder={"์ ํ๋ฒํธ,์ฌ์ฉ์ ์ด๋ฆ ๋๋ ์ด๋ฉ์ผ"}/>
                    <input type={"password"} onChange = { (e) => {setPassword(e.target.value)} } placeholder={"๋น๋ฐ๋ฒํธ"}/>
                    <button type={"submit"} className={"login-button"}>๋ก๊ทธ์ธ</button>
                </form>
                <hr/>

                <div className={"login-footer"}>
                <p>Facebook์ผ๋ก ๋ก๊ทธ์ธ</p>
                    {
                        success === true
                            ? null
                            : <Message message={message}/>
                    }
                <p style={{color:'black'}}>๋น๋ฐ๋ฒํธ๋ฅผ ์์ผ์จ๋์?</p>
                </div>
                <div></div>
                <div className={"login member"}>
                    <div>
                    <p>๊ณ์ ์ด ์์ผ์ ๊ฐ์?</p> <p style={{float:'right'}}><a href={'/member'}>๊ฐ์ํ๊ธฐ</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Message(props) {
    return(
        <div>
            <p>{props.message}</p>
        </div>
    )
}

export default Login;