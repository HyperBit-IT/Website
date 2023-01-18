import Head from 'next/head'
import customHeader from "./_snippets/header";
import customFooter from "./_snippets/footer";
import gradient_1 from "./_snippets/gradients";


export default function Contacts() {
    return (
        <>
            <Head>
                <title>HyperBit - Contatti</title>
                <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
            </Head>
            {customHeader()}
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Contatti
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                    Potete trovare la nostra sede a <a className="text-gray-400"
                                                                       href="https://www.openstreetmap.org/node/10309533819#map=19/46.06698/11.23658">Pergine
                                    Valsugana (TN), in via Monte Cristallo 35</a>
                                    , presso la sede dello studio <a className="text-gray-400"
                                                                     href="https://esseticonsulting.it">EsseTi
                                    Consulting.</a>
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                    In ogni caso siamo raggiungibili anche tramite
                                    <a className="text-gray-400" href="mailto:mail@hyperbit.it"> Email</a>
                                    ,
                                    <a className="text-gray-400" href="https://t.me/hyperbit"> Telegram</a>
                                    ,
                                    <a className="text-gray-400" href="mailto:hyperbit@pec.it"> Posta Elettronica
                                        Certificata </a>
                                    e cellulare presso il numero
                                    <a className="text-gray-400" href="tel:+393202930345"> 3202930345</a>.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                    In caso di necessità potete contattare il NOC presso l<span
                                    aria-hidden="true">&apos;</span>indirizzo email:
                                    <a className="text-gray-400" href="mailto:noc@hyperbit.it"> noc@hyperbit.it</a>
                                </p>
                                <div className="text-gray-600 text-justify sm:text-center">
                                    <br/>
                                    <iframe className="w-full h-72"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=11.234813332557678%2C46.066164900086726%2C11.238353848457336%2C46.06779696385379&amp;layer=mapnik&amp;marker=46.06698093800196%2C11.236583590507507">
                                    </iframe>
                                </div>
                            {gradient_1()}
                        </div>
                    </div>
                </div>
            </main>
            {customFooter()}
        </>
    )
}
