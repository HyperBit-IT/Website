export default function customFooter() {
    return (
        <>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
                <footer className="gap-80 columns-2 sm:gap-20">
                    <div className="w-full grid-rows-4 sm:grid-rows-6 sm:w-auto">
                        <p className="font-semibold text-black sm:justify-center">
                            HyperBit S.R.L.S
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Via Monte Cristallo 35, Pergine Valsugana (TN), Italy
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            P.Iva: IT0123456789 - CCIAA Trento
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Capitale Sociale:
                        </p>
                    </div>
                    <div className="w-full  grid-rows-2">
                        <p className="font-medium text-black sm:justify-center">
                            Infrastructure <a href="https://status.hyperbit.it" className="font-semibold text-black">
                            status
                        </a>
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Our software is <a href="https://gitlab.com/HyperBit-IT"
                                               className="font-semibold text-black">
                            Open-Source
                        </a>
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Made with ❤️ by <a href="https://francescomasala.me" className="font-semibold text-black">
                            Francesco Masala
                        </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}
