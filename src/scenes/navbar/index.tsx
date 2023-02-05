import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import { SelectedPage } from '@/shared/types';

import ActionButton from '@/shared/ActionButton';

import React from 'react'
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (page: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const flexBetween = "flex justify-between items-center";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarbackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
        <div
            className={`${navbarbackground} ${flexBetween} fixed top-0 z-40 w-full py-6}`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/*contains navbar and other elements*/}
                <div className={`${flexBetween} w-full gap-16 py-6`}>
                    {/*Left Side of navbar => contains logo */}
                    <img src={Logo} alt="Logo" />
                    {/*Right Side of navbar => contains links */}

                    { isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="contact us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>sign up</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>

                    </div>)
                    :(
                        <button 
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={()=>{setIsMenuToggled(!isMenuToggled)}}
                        >
                            <Bars3Icon className="w-6 h-6 text-white"/>

                        </button>
                    )    
                }
                </div>

            </div>

        </div>
        {/* Mobile Menu */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* Close Button */}
                <div className="flex justify-end p-12">

                    <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}}>
                        <XMarkIcon className="w-6 h-6 text-gray-400"/>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="contact us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                </div>



            </div>
        )}
    </nav>
  )
}

export default Navbar