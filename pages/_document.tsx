import {Head, Html, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="it">
            <Head>
                <meta charSet="utf-8"/>
                <html lang="it"/>
                <meta name="description" content="HyperBit SRLs Website"/>
                <meta name="Keywords"
                      content="HyperBit SRLs, HyperBit, Trentino, Informatica, Pergine Valsugana, Consulenza Informatica"/>
                <script defer data-domain="hyperbit.it" src="https://plausible.io/js/script.js"></script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
