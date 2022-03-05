import React from 'react';

import logo from '../../images/logo.png';

const Dashboard = () => {

    return(
        <div className="relative background pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">tulu</h2>
                    <img className="h-48 w-full object-cover" src={logo} alt=""/>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px]">
                        {/* image */}
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                {/* <p className="text-sm font-medium text-indigo-600">
                                    <a className="hover:underline">
                                        category name
                                    </a>
                                </p> */}
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-semibold text-gray-900">explore</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px]">
                        {/* image */}
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                {/* <p className="text-sm font-medium text-indigo-600">
                                    <a className="hover:underline">
                                        category name
                                    </a>
                                </p> */}
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-semibold text-gray-900">plan</p>
                                </a>
                            </div>

                        </div>   
                    </div>
                    
                    <div className="flex flex-col rounded-[50px] shadow-lg overflow-hidden h-[576px] w-[370px]">
                        {/* image */}
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                {/* <p className="text-sm font-medium text-indigo-600">
                                    <a className="hover:underline">
                                        category name
                                    </a>
                                </p> */}
                                <a className="block mt-2">
                                    <p className="text-center text-[48px] font-semibold text-gray-900">connect</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;