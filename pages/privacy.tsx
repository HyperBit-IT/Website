import Head from "next/head";
import customHeader from "./_snippets/header";
import Suggestion from "./_snippets/suggestion";
import Button from "./_snippets/button";
import gradient_1 from "./_snippets/gradients";
import customFooter from "./_snippets/footer";
import React from "react";

export default function Privacy() {
    return (<>
        <Head>
            <title>HyperBit S.R.L.S.</title>
            <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
        </Head>
        {customHeader()}
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Privacy policy
                            </h1>
                            <br/>
                            <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                Aggiornata il 10 Gennaio 2023
                            </h2>
                            <div>
                                <div>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                        La presente Informativa sulla privacy spiega le politiche di HyperBit S.R.L.S.
                                        sulla raccolta e l<span
                                        aria-hidden="true">&apos;</span>uso delle informazioni che
                                        raccogliamo oppure utilizzi un servizio offerto da noi.
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                        Utilizzando il nostro Servizio, tutti i tuoi dati vengono generalizzati<span
                                        aria-hidden="true">&apos;</span> ed utilizzati per il servizio di analitica
                                        offerto da <a href="https://plausible.io/">Plausible</a> che è concordante con:
                                        GDPR,
                                    </p>
                                </div>
                            </div>
                            {gradient_1()}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        {customFooter()}
    </>
)
}