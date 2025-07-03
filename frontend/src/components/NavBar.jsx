import { useState } from "react"
import Search from "./Search";

export default function NavBar(props){
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-white shadow px-[15%] py-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold text-black" href="/">VNnSE</a>

                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-600 hover:text-black">Trang chủ</a>
                    <div className="relative group">
                        <a  
                            href="/category"
                            className="text-gray-600 hover:text-black inline-flex items-center"
                        >
                            Chuyên mục

                            <svg
                                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24">

                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <div className="
                            absolute top-full left-0
                            bg-white rounded-lg shadow-lg
                            opacity-0 group-hover:opacity-100
                            pointer-events-none group-hover:pointer-events-auto
                            transform translate-y-2 group-hover:translate-y-0
                            transition-all duration-200
                            z-20
                            flex space-x-4 px-4 py-2
                            "
                        >
                            {
                                props.categories.map((cat) => (
                                    <a 
                                        key={cat.id} 
                                        className="whitespace-nowrap text-gray-700 hover:text-black hover:underline"
                                        href={`/category/${cat.slug}`}>{cat.name}</a>
                                ))
                            }
                        </div>
                    </div>

                    <div className="relative group">
                        <a  
                            className="text-gray-600 hover:text-black inline-flex items-center"
                            href="/source"
                        >
                            Cơ quan báo chí

                            <svg
                                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>    
                        </a>

                        <div className="
                            absolute top-full left-0
                            mt-2
                            bg-white rounded-lg shadow-lg
                            opacity-0 group-hover:opacity-100
                            transform -translate-y-2 group-hover:translate-y-0
                            transition-all duration-200
                            pointer-events-none group-hover:pointer-events-auto
                            z-20
                            flex space-x-4
                            px-4 py-2
                        ">
                            <a>Hello</a>    
                        </div>    


                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-x-4">
                    <Search></Search>
                    <a href="#" className="text-sm text-gray-600 hover:text-black">Đăng nhập</a>
                    <a href="#" className="text-sm bg-gray-800 text-white px-3 py-1.5 rounded hover:bg-black">
                        Đăng ký
                    </a>
                </div>

                <div className="md:hidden">
                <button
                    id="mobile-menu-button"
                    className="text-gray-600 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                </div>
            </div>

            {mobileOpen && (
                <div id="mobile-menu" className="px-4 pt-2 pb-4 space-y-2 md:hidden">
                <a href="#" className="block text-gray-600 hover:text-blue-600">Trang chủ</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Dịch vụ</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Liên hệ</a>
                </div>
            )}
         </nav>
    )
}