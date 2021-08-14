import { useState } from "react";
import Head from "next/head";

export default function HomePage() {
    const [message, setMessage] = useState<string>("Hello,World!");
    return (
        <>
            <Head>
                <title>Top Page</title>
            </Head>
            <main>
                <div>{message}</div>
                <button
                    onClick={() => {
                        setMessage("Good-Bye!");
                    }}
                >
                    Bye
                </button>
            </main>
        </>
    );
}
