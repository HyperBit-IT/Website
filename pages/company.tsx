import Head from 'next/head'
import customHeader from "./_snippets/header";
import customFooter from "./_snippets/footer";
import gradient_1 from "./_snippets/gradients";


export default function Company() {
    return (
        <>
            <Head>
                <title>HyperBit - Chi Siamo</title>
                <link rel="shortcut icon" href="/hyperbit-logo-icon-dark.svg"/>
            </Head>
            {customHeader()}
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Chi siamo
                                </h1>
                                <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                    (Oppure chi sono)
                                </h2>
                                <div>
                                    <div>
                                        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
                                            Mi chiamo <a className="text-blue-600"
                                            href="https://francescomasala.me">Francesco Masala</a>, fin da ragazzo
                                            ho sempre avuto un forte interesse per la tecnologia, in particolare per il
                                            mondo
                                            delle
                                            infrastrutture informatiche. All<span
                                            aria-hidden="true">&apos;</span>eta<span
                                            aria-hidden="true">&apos;</span> di 17 anni ho iniziato a contribuire presso
                                            vari
                                            progetti open source
                                            e a lavorare come freelance per aziende locali, da allora ho continuato ad
                                            appassionarmi sempre di più a questo mondo, fino ad avere il
                                            mio Autonomous System Number (ASN) personale (<a className="text-blue-600"
                                            href="https://as212539.net">AS212539</a>)
                                            e successivamente diventare membro della <a className="text-blue-600"
                                            href="https://foundation.gnome.org/"> fondazione Gnome</a>.
                                        </p>
                                    </div>
                                </div>
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
