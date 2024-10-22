'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="bg-white/20 backdrop-blur-md fixed w-full z-50 top-0 py-1">
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#12141b] to-[#0c0f15] -z-10" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20 -z-10" /> */}
            {/* <div className="absolute inset-0 bg-cover -z-50"
                style={{
                    backgroundImage: "url(/background.jpeg)"
                }}
            ></div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                            {/* <span className="ml-2 font-bold text-xl  ">VulnHound</span> */}
                            {/* <span className="sr-only">VulnHound</span> */}
                        </Link>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 ">
                                <NavLink href="/services">Services</NavLink>
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-black hover:text-white border border-black/20 transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <MobileNavLink href="/services" onClick={toggleMenu}>Services</MobileNavLink>
                        <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
                        <MobileNavLink href="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="px-2">
                            <button className="w-full bg-white text-black px-4 py-2 rounded-md text-base font-medium hover:bg-primary-dark transition-colors duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-white hover:backdrop-blur-sm  px-3 py-2 rounded-md text-lg font-semibold transition-colors duration-300"
        >
            {children}
        </Link>
    )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-300 hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-xl font-normal transition-colors duration-300"
            onClick={onClick}
        >
            {children}
        </Link>
    )
}