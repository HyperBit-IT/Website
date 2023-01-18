import Head from 'next/head'
import React from "react";
import customFooter from "./_snippets/footer";
import customHeader from "./_snippets/header";
import gradient_1 from "./_snippets/gradients";

export default function Home() {
    return (<>
        <Head>
            <title>HyperBit SRLs</title>
            <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
        </Head>
        {customHeader()}
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div
                                className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Inviaci un messaggio {' '}
                      <a href="https://wa.me/message/AN5DQU53PIQQH1" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true"/>
                      Premi qua <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Home
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                Benvenuto sul nostro sito!
                            </p>
                            <p className=" text-lg leading-8 text-gray-600 sm:text-center">
                                Qua potrai trovare informazioni su di noi, i nostri servizi ed i nostri contatti
                            </p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                                <a
                                    href="mailto://mail@hyperbit.it"
                                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                >
                                    Invia una email <span className="text-indigo-200" aria-hidden="true">
                       &rarr;
                    </span>
                                </a>
                                <a
                                    href="https://t.me/HyperBit_Fra"
                                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                >
                                    Contattaci su Telegram <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                                </a>
                            </div>
                            <br/>
                        </div>
                        {gradient_1()}
                    </div>
                </div>
            </div>
        </main>
        {customFooter()}
    </>)
}
