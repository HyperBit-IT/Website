import Head from 'next/head'
import customFooter from "./_snippets/footer";
import customHeader from "./_snippets/header";
import gradient_1 from "./_snippets/gradients";


export default function Services() {
    return (
        <>
            <Head>
                <title>HyperBit - Servizi</title>
                <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
            </Head>
            {customHeader()}
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-6xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Servizi
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    HyperBit offre consulenza e sviluppo di soluzioni tecnologiche per le piccole e
                                    medie
                                    aziende.
                                </p>
                                <br/>
                                <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-center sm:text-4xl">
                                    Consulenza
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-center">
                                    HyperBit offre consulenza e sviluppo di soluzioni tecnologiche per le piccole e
                                    medie aziende. Le nostre soluzioni sono basate su tecnologie open-source e sono in
                                    grado di soddisfare le esigenze di qualsiasi azienda, sia essa piccola o grande.
                                </p>
                                <br/>
                                <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-center sm:text-4xl">
                                    IaaS
                                </h2>
                                <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-center">
                                    HyperBit offre servizi di Infrastructure as a Service (IaaS) per la gestione di VPS,
                                    server dedicati e cloud privati.
                                </p>
                                <br/>
                            </div>
                            {gradient_1()}
                        </div>
                    </div>
                </div>
            </main>
            {customFooter()}
        </>
    );
}
