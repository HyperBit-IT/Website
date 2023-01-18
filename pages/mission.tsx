import Head from 'next/head'
import customHeader from "./_snippets/header";
import customFooter from "./_snippets/footer";
import gradient_1 from "./_snippets/gradients";


export default function Mission() {
    return (
        <>
            <Head>
                <title>HyperBit - Mission</title>
                <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
            </Head>
            {customHeader()}
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Missione Aziendale
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    La nostra missione è quella di fornire un servizio affidabile ed efficiente alle
                                    piccole e medie imprese, offrendo loro una soluzione tecnologica all<span
                                    aria-hidden="true">&apos;</span>avanguardia
                                    basata su progetti open-source.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Ci impegniamo a garantire trasparenza e integrità in
                                    tutte le nostre azioni, utilizzando le tecnologie più innovative per garantire la
                                    massima sicurezza e protezione dei dati dei nostri clienti. Ci proponiamo di
                                    diventare il partner di fiducia delle piccole e medie imprese per le loro esigenze
                                    tecnologiche, costruendo relazioni a lungo termine basate sulla fiducia e sulla
                                    trasparenza.
                                </p>
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
