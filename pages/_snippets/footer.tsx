import Image from "next/image";

export default function customFooter() {
    return (
        <>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
                <footer className="gap-80 columns-2 sm:gap-20">
                    <div className="w-full grid-rows-4 sm:grid-rows-6 sm:w-auto">
                        <p className="font-semibold text-black sm:justify-center">
                            HyperBit SRLs
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Via Monte Cristallo 35, Pergine Valsugana (TN), Italy
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            P.Iva: IT02697330229 - REA: TN-243469
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Capitale Sociale: 600€
                        </p>
                    </div>
                    <div className="w-full  grid-rows-2">
                        <p className="font-medium text-black sm:justify-center">
                            Stato dei
                            <a href="https://status.hyperbit.it" className="font-semibold text-black"> servizi
                            </a>
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Il nostro software è <a href="https://gitlab.com/HyperBit-IT"
                                                    className="font-semibold text-black">
                            Open-Source
                        </a>
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            Fatto con ❤️ da <a href="https://francescomasala.me" className="font-semibold text-black">
                            Francesco Masala
                        </a>
                        </p>
                        <p className="font-medium text-black sm:justify-center">
                            <a href="mailto://hyperbit@pec.it" className="font-semibold text-black">
                                Posta Elettronica Certificata
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
            <div className={"flex justify-center"}>
                <Image src={"https://cdn.allbound.com/linode-ab/2021/01/29190609/partnerAsset-2%402x.png"} alt={"Linode Solutions Partner"} width={150} height={50}/>
            </div>
        </>
    )
}

