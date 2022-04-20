import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
    const [checked, setChecked] = React.useState(false);
    const [cough, setCough] = React.useState(false);
    const [headache, setHeadache] = React.useState(false);
    const [contact, setContact] = React.useState(false);
    async function handleOnSubmit(e) {
        //e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        fetch("/api/mail", {
            method: "post",
            body: JSON.stringify(formData),
        });
    }

    function handleChange(e) {
        setChecked(!checked);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>COVID-19 assessment</title>
                <meta name="description" content="COVID-19 assessment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <span className={styles.logo}>
                        <Image src="/morela-logo.svg" alt="Morela Logo" width={200} height={100} />
                    </span>
                </h1>
                <div className={styles.grid}>
                    <form action="/success" method="post" onSubmit={handleOnSubmit}>
                        <div className={styles.customfield}>
                            <input type="text" name="firstName" id="firstName" placeholder="First name" required />
                            <label htmlFor="firstName" className={styles.placeholder}>
                                First name
                            </label>
                        </div>
                        <div className={styles.customfield}>
                            <input type="text" name="lastName" id="lastName" placeholder="Last name" required />
                            <label htmlFor="lastName" className={styles.placeholder}>
                                Last name
                            </label>
                        </div>
                        <div className={styles.customfield}>
                            <input type="number" name="age" id="age" placeholder="Your age" required />
                            <label htmlFor="age" className={styles.placeholder}>
                                Your age
                            </label>
                        </div>
                        <div className={styles.customfield}>
                            <input type="email" name="email" id="email" placeholder="Your Email" required />
                            <label htmlFor="email" className={styles.placeholder}>
                                Your Email
                            </label>
                        </div>
                        <p className={styles.checkbox}>
                            <label htmlFor="fever">Do you have a fever? </label>
                            <input type="checkbox" name="fever" onChange={handleChange} value={checked} />
                        </p>

                        <div className={styles.customfield} style={{ display: checked ? "block" : "none" }}>
                            <input
                                type="number"
                                step="0.01"
                                name="measuredtemp"
                                id="measuredtemp"
                                placeholder="Last measured temperature"
                                defaultValue="0.0"
                                required
                            />
                            <label htmlFor="measuredtemp" className={styles.placeholder}>
                                Last measured temperature?
                            </label>
                        </div>
                        <p className={styles.checkbox}>
                            <label htmlFor="cough">Do you cough? </label>
                            <input
                                type="checkbox"
                                name="cough"
                                defaultChecked={cough}
                                onChange={() => setCough(!cough)}
                                value={cough}
                            />
                        </p>
                        <p className={styles.checkbox}>
                            <label htmlFor="headache">Do you have severe headache? </label>
                            <input
                                type="checkbox"
                                name="headache"
                                defaultChecked={headache}
                                onChange={() => setHeadache(!headache)}
                                value={headache}
                            />
                        </p>
                        <p className={styles.checkbox}>
                            <label htmlFor="contact">Any contacts with COVID-19? </label>
                            <input
                                type="checkbox"
                                name="contact"
                                defaultChecked={contact}
                                onChange={() => setContact(!contact)}
                                value={contact}
                            />
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <button>SUBMIT</button>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
}
