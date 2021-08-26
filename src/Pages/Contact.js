import React from 'react'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import linkedin from '../images/linked-in.png'
import discord from '../images/discord.png'

const Contact = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h2 className="text-5xl text-left sm:ml-40 mt-16" style={{ textDecoration: "2px underline #29DB9B", textUnderlinePosition: "under" }}>Contact Us</h2>
                    <div>
                        <div className="sm:ml-40 mt-12 sm:mr-24">
                            <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                                <form>
                                    <div className="sm:rounded-md">

                                        <div className="col-span-6">
                                            <label htmlFor="name" className="block text-md font-medium text-gray-700 dark:text-gray-200">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="email" className="block text-md font-medium text-gray-700 dark:text-gray-200">
                                                Email ID
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="col-span-6">
                                            <label htmlFor="subject" className="block text-md font-medium text-gray-700 dark:text-gray-200">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subject"
                                                autoComplete="subject"
                                                className="mt-1 focus:ring-comsocgreen focus:border-comsocgreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div><br />
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="message" className="block text-md font-medium text-gray-700 dark:text-gray-200">
                                                    Message
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={3}
                                                        className="shadow-sm focus:ring-comsocgreen focus:border-comsocgreen mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"

                                                    />
                                                </div>

                                            </div>
                                        </div><br />
                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 w-full px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-comsocgreen hover:bg-comsocgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-comsocgreen"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>
                </div>
                <div className="sm:mr-40 sm:mt-36 sm:ml-24">
                    <h2 className="text-lg font-medium text-left mb-4">Address</h2>
                    <p className="text-lg text-left">Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, Tamil Nadu 600127</p><br />
                    <h2 className="text-lg font-medium text-left mb-4">Email ID</h2>
                    <a href="mailto:ieeecomputersociety@vit.ac.in"><p className="text-lg text-left">ieeecomputersociety@vit.ac.in</p></a><br />
                    <h2 className="text-lg font-medium text-left mb-4">Social Media</h2>
                    <div className="w-1/2 grid grid-cols-4 gap-4">
                        <a href="https://www.instagram.com/comsoc.vitcc/" target="_blank"><img src={instagram} alt="Instagram" className="h-11 col-span-1"></img></a>
                        <a href="https://github.com/ComputerSocietyVITC" target="_blank"><img src={github} alt="Github" className="h-11 col-span-1"></img></a>
                        <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/" target="_blank"><img src={linkedin} alt="LinkedIn" className="h-11 col-span-1"></img></a>
                        <a href="https://discord.gg/6vkY3kcZnE" target="_blank"><img src={discord} alt="Discord" className="h-11 col-span-1"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
