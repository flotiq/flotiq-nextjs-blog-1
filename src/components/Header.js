'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../../public/kyan-logo.png';

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-auto flex-wrap md:flex-nowrap">
                        <div className="flex grow md:grow-0">
                            <div className="-ml-2 mr-2 flex items-center md:hidden">
                                <DisclosureButton
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                        hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex-shrink-0 flex grow md:grow-0 items-center justify-center">
                                <Link href="/">
                                    <Image
                                        className="block h-8 md:h-12 w-auto cursor-pointer"
                                        src={Logo}
                                        alt="Flotiq"
                                        width={138}
                                        height={50}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center w-full">
                            <h1 className="text-3xl">Blog About Everything</h1>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link
                                    href="mailto:hello@flotiq.com"
                                    className="relative inline-flex items-center px-4 py-2 font-regular underline hover:text-secondary"
                                >
                                    Say Hi!
                                </Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center justify-center w-full md:w-auto py-5 md:py-0">
                            <h1 className="text-2xl">Blog About Everything</h1>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="md:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 sm:px-6">
                            <p>Menu content here...</p>
                        </div>
                    </div>
                </DisclosurePanel>
            </>
        )}
    </Disclosure>
);

export default Header;
