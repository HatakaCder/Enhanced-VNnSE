export default function ArticleCard_SmallWide() {
  return (
    <div className="flex items-stretch bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-none overflow-hidden max-w-md py-2">
      <div className="w-32 flex-shrink-0">
        <img
          src="https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png"
          alt="Thumbnail"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-md font-semibold text-gray-900 line-clamp-3">
          Hàng loạt chuyến bay bị hủy và lùi giờ bay do ảnh hưởng của bão số 1
        </h2>

        <div className="text-sm text-gray-500 mt-2">
          <span>Nguồn: VnExpress</span>
          <span className="mx-2">•</span>
          <span>12/06/2025</span>
        </div>
      </div>
    </div>
  );
}
