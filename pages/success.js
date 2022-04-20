import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>COVID-19 assessment</title>
                <meta name="description" content="COVID-19 assessment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <a className={styles.grid} href="./">
                    <div className={styles.card}>
                        <h1>SUCCESS</h1>
                        <p> We will contact you once your data is processed.</p>
                    </div>
                </a>
            </main>
        </div>
    );
}
