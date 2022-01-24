import React from 'react'
import comsocLogowhite from "../images/comsocLogowhite.png";
import instagram from '../images/socialmedia/instagram.png'
import github from '../images/socialmedia/github.png'
import linkedin from '../images/socialmedia/linkedin.png'
import discord from '../images/socialmedia/discord.png'
import youtube from '../images/socialmedia/youtube.png'
import twitter from '../images/socialmedia/twitter.png'
import telegram from '../images/socialmedia/telegram.png'
import devto from '../images/socialmedia/devto.png'

const Footer = () => {

    return (
        <div className='relative z-0'>
            <footer className="bg-gradient-to-b from-bgcolor3 to-black font-montserrat">
                <div className="pb-6 text-gray-800 flex flex-wrap justify-left text-left">
                    <div className="pt-8 lg:pt-4 w-11/12 mx-auto lg:mx-0 sm:w-2/3 lg:w-3/12 order-4 lg:order-1">
                        <img src={comsocLogowhite} alt="IEEE CS VITC Logo" className='px-6 lg:pl-20' />
                        <p className='text-white text-xs pt-8 lg:pt-12 lg:pl-14 text-center lg:text-right'>©️ Copyright 2022 - IEEE CS VITC. All Rights Reserved.</p>
                    </div>
                    <div className="mt-3 w-full lg:w-3/12 py-6 lg:py-0 pl-28 hidden lg:block order-1 lg:order-2">
                        <div className="text-base text-white mr-56 mb-6">
                            Menu
                            <div id='underlineGradient' />
                        </div>
                        <a href="/" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Home
                        </a>
                        <a href="/Team" className="my-3 block text-white hover:text-gray-200 text-sm">
                            The Team
                        </a>
                        <a href="/Events" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Events
                        </a>
                        <a href="/Projects" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Projects
                        </a>
                        <a href="/Blogs" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Blogs
                        </a>
                        <a href="/Contact" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Contact
                        </a>
                    </div>
                    <div className="mt-3 w-full lg:w-3/12 pl-4 order-2 lg:order-3">
                        <div className="text-lg lg:text-base text-white inline-block mb-3">
                            Address
                            <div id='underlineGradient' />
                        </div>
                        <a href="https://goo.gl/maps/C9UE9JLWnBAfQPKe7" target="_blank" className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm lg:pr-32">
                            Kelambakkam - Vandalur Rd, Rajan Nagar,
                            Chennai, Tamil Nadu 600127
                        </a>
                        <br />
                        <div className="text-lg lg:text-base text-white inline-block mb-3">
                            Email
                            <div id='underlineGradient' />
                        </div>
                        <a href="mailto:ieeecomputersociety@vit.ac.in" target="_blank" className="my-3 block text-white hover:text-gray-200 text-base lg:text-sm">
                            ieeecomputersociety@vit.ac.in
                        </a>
                    </div>
                    <div className='mt-3 w-full lg:w-3/12 order-3 lg:order-4'>
                        <div className="text-lg lg:text-base text-white inline-block my-4 lg:my-0 lg:mb-10 pl-4 lg:pl-0" >
                            Social Media
                            <div id='underlineGradient' />
                        </div>
                        <div className="grid grid-cols-4 lg:pr-16">
                            <div>
                                <a href="https://www.instagram.com/comsoc.vitcc/" target="_blank"><img src={instagram} alt="Instagram" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://discord.gg/6vkY3kcZnE" target="_blank"><img src={discord} alt="Discord" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://github.com/ComputerSocietyVITC" target="_blank"><img src={github} alt="Github" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/" target="_blank"><img src={linkedin} alt="LinkedIn" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ" target="_blank"><img src={youtube} alt="youtube" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://t.me/IEEE_CS_VIT_Chennai" target="_blank"><img src={telegram} alt="telegram" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/ieeecsvitc" target="_blank"><img src={twitter} alt="twitter" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                            <div>
                                <a href="https://dev.to/ieeecsvitc" target="_blank"><img src={devto} alt="devto" className="h-7 my-5 mx-auto lg:mx-0"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
