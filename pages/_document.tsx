import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="it">
            <Head>
                <meta charSet="utf-8"/>
                <html lang="it"/>
                <meta name="description" content="HyperBit S.R.L.S. Website"/>
                <meta name="Keywords" content="HyperBit S.R.L.S., HyperBit, Trentino, Informatica, Consulenza Informatica"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Script defer data-domain="hyperbit.it" src="https://plausible.io/js/script.js"></Script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
