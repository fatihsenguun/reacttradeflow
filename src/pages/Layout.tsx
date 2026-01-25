import React from 'react'
import Header from '../components/generalComponents/Header';
import GlassLight from '../components/generalComponents/GlassLight';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (

        <div className='flex min-h-screen  bg-slate-950'>
            <Header />
            <main className='flex-1  p-8 mt-10 md:mt-3 md:ml-75' >
                <GlassLight>
                    {children}
                </GlassLight>

            </main>
        </div>

    )
}

export default Layout