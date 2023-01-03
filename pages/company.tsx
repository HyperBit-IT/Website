import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState} from "react";
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Services', href: '/services'},
    {name: 'Company', href: '/company'},
    {name: 'Linkedin', href: '#'},
    {name: 'Twitter', href: '#'},
]


export default function Company() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <Head>
                <title>HyperBit - Company</title>
            </Head>
            <div className="isolate bg-white">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <defs>
                        <linearGradient
                            id="Gradient1"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC"/>
                            <stop offset="1" stopColor="#F9A8D4"/>
                        </linearGradient>
                    </defs>
                </div>
                <div className="px-6 pt-6 lg:px-8 lg:pt-8">
                    <div>
                        <nav className="flex items-center justify-between h-9" aria-label="global">
                            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">HyperBit S.R.L.S.</span>
                                    <img className="h-8" src="/hyperbit-logo-icon-dark.svg" alt=""/>
                                </a>
                            </div>
                            <div className="flex items-center lg:hidden" aria-label="Global">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href}
                                       className="font-semibold text-gray-900 hover:text-gray-900">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                                <a
                                    href="https://panel.hyperbit.it"
                                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                >
                                    Log in
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div
                                    className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{' '}
                      <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true"/>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Company
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                   And here is the company page, in theory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
