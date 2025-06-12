export default function ArticleCard_Large(){
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                className="w-full h-48 object-cover rounded-2xl"
                src="https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png"
                alt="Thumbnail"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Tiêu đề bài viết</h2>
                <p className="text-sm text-gray-600 mb-4">
                Đây là mô tả ngắn của bài viết để thu hút người đọc nhấp vào xem thêm nội dung chi tiết.
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                <span>📅 22 Tháng 5, 2025</span>
                <span>📰 Nguồn: VNExpress</span>
                </div>
            </div>
        </div>
    )
}