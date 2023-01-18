import React, {MouseEvent} from 'react'
import Button from "./button";


export default function Cookiebanner() {
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <>
            <section className="fixed bottom-0 left-0 w-full py-2 md:py-4 ">
                <div
                    className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <div className="flex items-center flex-grow text-gray-900">
                        <p className="text-sm font-medium">
                            This site uses services that use cookies to deliver better
                            experience and analyze traffic. You can learn more about the
                            services we use at our{' '}
                            <a href="/privacy-policy">
                                <a className="text-sm underline hover:text-lightAccent">
                                    privacy policy
                                </a>
                            </a>
                            {Button(true, "Privacy Policy", "/privacy-policy")}
                            .
                        </p>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7
                    text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                            onClick={onClick}
                        >
                            I love cookies!
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}