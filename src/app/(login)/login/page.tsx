'use client'

import styles from "./styles.module.scss";
import Image from "next/image";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {redirect} from "next/navigation";
import {useRouter} from "next/navigation";

const Login = () => {
    /*useEffect(() => {
        fetch("/login/api")
            .then(response => response.json())
            .then(data => {console.log(data)})
        fetch("/login/api", {method : "POST", body : "postText"})
            .then(response => response.json())
            .then(data => {console.log(data)});
    }, []);*/

    const [id, setId] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [validate, setValidate] = useState<boolean>(false);
    const router = useRouter();

    const onChangeId = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }, [])
    const onChangePass = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    }, []);
    const onClickLogin = useCallback(() => {
        if(id && pass){
            // 권한 요청 -> JWT , Session 등
            const data =
                fetch("/login/api",
                    {method : "POST", body : JSON.stringify({id : id, password : pass})}
                );

            data.then(response => response.json())
                .then(data => {
                    if(data.code === 200)
                        router.push("/current-list", {scroll : false});
                    else if(data.code == 201){
                        console.log(data);
                        router.push("/current-list");
                    }
                    else if(data.code == 401)
                        console.log(data);
                })
        } else {
            alert("아이디와 비밀번호 전부 입력 해 주세요.")
        }
    }, [id, pass, router]);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.centerContainer}>
                <div className={styles.projectLogo}>
                    <Image
                        src={"/logo/Code-Creature.png"}
                        alt={"project-logo"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={styles.projectTitle}>
                    Code Creature
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.idContainer}>
                        <input
                            type={"text"}
                            placeholder={"등록하신 ID 혹은 Email을 넣어주세요."}
                            className={styles.idInput}
                            value={id}
                            onChange={onChangeId}
                        />
                    </div>
                    <div className={styles.passContainer}>
                        <input
                            type={"password"}
                            placeholder={"패스워드를 입력 해 주세요."}
                            className={styles.passInput}
                            value={pass}
                            onChange={onChangePass}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.loginButton}
                            onClick={onClickLogin}
                        >Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;