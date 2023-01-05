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
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Servizi
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Here I should write something about the services we offer.
                                </p>
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
