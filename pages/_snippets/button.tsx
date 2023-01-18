import React from "react";

export default function Button(isPrimary: boolean, title: string, link: string) {
    return (
        <>
            {isPrimary ? (
                <a href={link}
                   className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7
                    text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                    {title}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                </a>
            ) : (
                <a href={link}
                   className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900
                        ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    {title}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                </a>
            )}
        </>
    )
}