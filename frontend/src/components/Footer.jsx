export default function Footer(){
    return (
        <footer className="bg-gray-200 text-gray-500 mt-6">
            <div className="container mx-auto py-12">

                <div className="grid grid-cols-4 gap-x-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Về chúng tôi:</h3>
                        <p>
                            VNnSE là nơi cập nhật tin tức nhanh chóng và chính xác từ nhiều nguồn bài báo uy tín ở Việt Nam như VnExpress, Lao Động, Dân Trí, Đảng Cộng Sản,... Kèm theo đó nâng cao khả năng tìm kiếm các bài báo, trả về thông tin chính xác nhất có thể.
                        </p>

                        <div className="py-6 flex gap-x-2">
                            <p className="font-semibold">Mã nguồn dự án: </p>
                            <a className="font-semibold hover:text-gray-800" href="https://github.com/HatakaCder/Enhanced-VNnSE">GitHub</a>
                        </div>
                        
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Điều khoản - Chính sách:</h3>

                        <p>
                            Dự án này được xây dựng nhằm mục đích nghiên cứu và ứng dụng công nghệ AI vào thực tiễn. Mọi hành vi sao chép, phân phối hoặc thu lợi nhuận từ phần mềm này khi không có sự cho phép của bên thực hiện và bên phân phối nguồn dữ liệu; chúng tôi không chịu bất kỳ trách nhiệm pháp lý nào liên quan.
                        </p>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-xl font-semibold mb-4">Liên kết nhanh:</h3>
                        
                        <div className="grid grid-cols-3 grid-flow-row gap-4">
                            <a href="#">Công nghệ</a>
                            <a href="#">Kinh doanh</a>
                            <a href="#">Giải trí</a>
                            <a href="#">Thể thao</a>
                            <a href="#">Sức khỏe</a>
                            <a href="#">Đời sống</a>
                            <a href="#">Ẩm thực</a>
                            <a href="#">Du lịch</a>
                            <a href="#">Giáo dục</a>
                            <a href="#">Khoa học</a>
                            <a href="#">Môi trường</a>
                            <a href="#">Xe cộ</a>
                            <a href="#">Pháp luật</a>
                            <a href="#">Bất động sản</a>
                            <a href="#">Thời trang</a>
                        </div>
                    </div>
                </div>
                

                {/* Divider and Social */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>© 2025 VNnSE. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://www.facebook.com/hatakacder" aria-label="Facebook" className="hover:text-gray-800">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.407.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.407 24 22.674V1.326C24 .593 23.404 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="https://github.com/HatakaCder" aria-label="GitHub" className="hover:text-gray-800">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hatakacder/s" aria-label="Linkedin" className="hover:text-gray-800">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.941v5.666H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.368 4.268 5.451v6.292zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.727v20.545C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.273V1.727C24 .771 23.2 0 22.225 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}