import React from 'react'
interface GlassLightProps {
    children: React.ReactNode;
}

function GlassLight({ children }: GlassLightProps) {
    return (
        <div className='relative min-h-screen bg-slate-950 text-slate-200 overflow-hidden p-6 rounded-lg'>
            {/**blue light */}
            <div className='absolute -top-20 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none '> </div>
            <div className='absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-700/10 blur-[150px] rounded-full pointer-events-none'></div>

            <div className='relative z-10' >
                {/**temel grid yapıları */}

           
               {children}
            </div>
        </div>
    )
}

export default GlassLight