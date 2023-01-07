import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer/index'

const Explore = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto p-4'>
                <Navbar textColor={"black"}/>
                <div className='w-full text-lg text-black flex flex-col items-start justify-center'>
                    {/* Introduction */}
                    <div className='font-Grotesk flex flex-col w-full items-center py-10'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-Grotesk max-w-2xl text-center pb-8'>Welcome to Climecheck Explorer</h1>
                    <p className='text-xl md:text-3xl font-Grotesk text-center'>Climecheck Explorer is a pollution explorer and analytics platform for a climate monitoring commons.</p>
                    </div>
                    {/* Cards */}
                    <div className="w-full md:w-[80%] mx-auto flex gap-8 flex-col md:flex-row items-center pb-20">
                        {/* Card 1 */}
                        <div className='h-[300px] w-1/2 bg-slate-200 rounded-3xl'>
                        </div>
                        <div className='h-[300px] w-1/2 bg-slate-200 rounded-3xl'>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Explore


