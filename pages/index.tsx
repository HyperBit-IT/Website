import Head from 'next/head'
import React from "react";
import customFooter from "./_snippets/footer";
import customHeader from "./_snippets/header";
import gradient_1 from "./_snippets/gradients";
import Suggestion from "./_snippets/suggestion";
import Button from "./_snippets/button";

export default function Home() {
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
                        {Suggestion("Check out our new telegram channel", "Read more", "https://t.me/HyperBitIT")}
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                Home
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                In theory this is the home page.
                            </p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                                {Button(true, "Send an email ", "mailto://fmasala@hyperbit.it")}
                                {Button(false, "Contact us on Telegram ", "https://t.me/francescomasala")}
                            </div>
                            <br>
                            </br>
                            {Suggestion("Subscribe to our newsletter", "Press here!", "https://cdn.forms-content.sg-form.com/a58efb3f-8d04-11ed-b120-fe799afc46d8")}
                        </div>
                        {gradient_1()}
                    </div>
                </div>
            </div>
        </main>
        {customFooter()}
    </>)
}
