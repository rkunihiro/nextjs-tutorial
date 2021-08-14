import { AppProps } from "next/app";
import Head from "next/head";

export default function CustomApp({ Component, pageProps }: AppProps) {
    console.log("CustomApp#render");
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="initial-scale=1,user-scalable=0" />
                <meta name="format-detection" content="telephone=no,email=no" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
