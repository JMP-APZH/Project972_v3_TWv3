import React from 'react'
import { BsPlus, BsFillLightningFill, BSGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Sidebar = () => {
    return (
        
        <div 
        className="fixed top-0 left-0 h-screen w-16
                    flex flex-col items-center
                    bg-primary text-secondary shadow-lg">

            <div>
                <nav className="bg-red-100 h-20 w-full flex items-center">
                    <button id="switchTheme" className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </nav>

                {/* <script>
                    document.getElementById('switchTheme').addEventListener('click', function() {
                        let htmlClasses = document.querySelector('html').classList;
                        if(localStorage.theme == 'dark') {
                            htmlClasses.remove('dark');
                            localStorage.removeItem('theme')
                        } else {
                            htmlClasses.add('dark');
                            localStorage.theme = 'dark';
                        }
                    });
                </script> */}

            </div>
            

        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />

        <i>A</i>
        <i>B</i>
        <i>C</i>
        <i>D</i>
        <i>E</i>

        

        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        { icon }

        <span class="sidebar-tooltip group-hover:scale-100">
            { text }
        </span>
    </div>
);

export default Sidebar
