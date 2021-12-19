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
                <p className={"login-head"}>𝓖𝓨𝓤𝓢𝓣𝓐𝓖𝓡𝓐𝓜</p>
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
                    <input type={"text"} onChange ={ (e) => {setId(e.target.value)} } placeholder={"전화번호,사용자 이름 또는 이메일"}/>
                    <input type={"password"} onChange = { (e) => {setPassword(e.target.value)} } placeholder={"비밀번호"}/>
                    <button type={"submit"} className={"login-button"}>로그인</button>
                </form>
                <hr/>

                <div className={"login-footer"}>
                <p>Facebook으로 로그인</p>
                    {
                        success === true
                            ? null
                            : <Message message={message}/>
                    }
                <p style={{color:'black'}}>비밀번호를 잊으셨나요?</p>
                </div>
                <div></div>
                <div className={"login member"}>
                    <div>
                    <p>계정이 없으신가요?</p> <p style={{float:'right'}}><a href={'/member'}>가입하기</a></p>
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