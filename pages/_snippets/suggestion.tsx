import React from "react";

export default function Suggestion(title: string, subtitle: string, link: string) {
    return (
        <>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    {title} {' '}
                      <a href={link}
                         className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true"/>
                          {subtitle} <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </span>
                </div>
            </div>
    </>
    )
}