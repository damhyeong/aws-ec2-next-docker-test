'use client'

import styles from "./styles.module.scss";
import {useCallback} from "react";

const SpringConnectTest = () => {

    const handleGet = useCallback(() => {
        const data = fetch("http://localhost:8080/test")
            .then((response) => response.json())
            .then(data => console.log(data));
    }, []);
    const handlePost = useCallback(() => {
        const data = fetch("/SpringConnectTest/api", {
            method : "POST"
        })
            .then((response) => response.json())
            .then(data => console.log(data));
    }, []);

    return (
        <div className={styles.testButtonContainer}>
            <div className={styles.buttonTest}>
                <div className={styles.buttonTitle}>
                    GetTest
                </div>
                <button onClick={handleGet}>
                    Information is in Console.
                </button>
            </div>
            <div className={styles.buttonTest}>
                <div className={styles.buttonTitle}>
                    PostTest
                </div>
                <button onClick={handlePost}>
                    Information is in Console.
                </button>
            </div>
        </div>
    )
}
export default SpringConnectTest;