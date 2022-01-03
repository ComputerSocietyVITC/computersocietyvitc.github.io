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
        <div>
            <footer className="bg-gradient-to-b from-bgcolor3 to-black font-montserrat">
                <div className="pb-6 text-gray-800 flex flex-wrap justify-left text-left">
                    <div className="pt-4 sm:w-4/12 md:w-3/12">
                        <img src={comsocLogowhite} alt="Comsoc Logo" className='pl-20' />
                        <p className='text-white text-xs pt-12 pl-14 text-right'>©️ Copyright 2022 - IEEE CS VITC. All Rights Reserved.</p>
                    </div>
                    <div className="mt-3 w-1/2 sm:w-4/12 md:w-3/12 pl-28">
                        <div className="text-md text-white mr-56 mb-8">
                            Menu
                            <div id='underlineGradient' />
                        </div>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Home
                        </a>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            The Team
                        </a>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Events
                        </a>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Projects
                        </a>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Blogs
                        </a>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            Contact
                        </a>
                    </div>
                    <div className="mt-3 w-1/2 sm:w-4/12 md:w-3/12 pl-4">
                        <div className="text-md text-white mr-72 mb-6">
                            Address
                            <div id='underlineGradient' className='mr-3' />
                        </div>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm pr-32">
                            Kelambakkam - Vandalur Rd, Rajan Nagar,
                            Chennai, Tamil Nadu 600127
                        </a>
                        <br />
                        <div className="text-md text-white mr-80 mb-6">
                            Email
                            <div id='underlineGradient' />
                        </div>
                        <a href="#" className="my-3 block text-white hover:text-gray-200 text-sm">
                            ieeecomputersociety@vit.ac.in
                        </a>
                    </div>
                    <div className='mt-3 w-1/2 sm:w-4/12 md:w-3/12'>
                        <div className="text-md text-white mr-64 mb-9" >
                            Social Media
                            <div id='underlineGradient' className='mr-6' />
                        </div>
                        <div className="grid grid-cols-4 pr-16">
                            <div>
                                <a href="https://www.instagram.com/comsoc.vitcc/" target="_blank"><img src={instagram} alt="Instagram" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://discord.gg/6vkY3kcZnE" target="_blank"><img src={discord} alt="Discord" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://github.com/ComputerSocietyVITC" target="_blank"><img src={github} alt="Github" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/" target="_blank"><img src={linkedin} alt="LinkedIn" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCOgwDinZGau4rwv3swAe-nQ" target="_blank"><img src={youtube} alt="youtube" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://t.me/IEEE_CS_VIT_Chennai" target="_blank"><img src={telegram} alt="telegram" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/ieeecsvitc" target="_blank"><img src={twitter} alt="twitter" className="h-7 my-5"></img></a>
                            </div>
                            <div>
                                <a href="https://dev.to/ieeecsvitc" target="_blank"><img src={devto} alt="devto" className="h-7 my-5"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
