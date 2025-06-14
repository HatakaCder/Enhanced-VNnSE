import { useState } from "react"
import Search from "./Search";

export default function NavBar(){
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-white shadow px-[15%] py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-black">VNnSE</div>

                <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-black">Trang chủ</a>
                <a href="/category" className="text-gray-600 hover:text-black">Chuyên mục</a>
                <a href="#" className="text-gray-600 hover:text-black">Cơ quan báo chí</a>
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