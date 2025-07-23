import { formatVietnameseDate } from "../utils/formatVietnameseDate";

export default function ArticleCard_SmallWide(props) {
  return (
    <a  
        className="flex items-stretch bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-none overflow-hidden max-w-md"
        href={props.link}
        >
        <div className="w-32 flex-shrink-0">
            <img
                src={props.img[0].url}
                alt="Thumbnail"
                className="w-full h-33 object-cover rounded-xl"
            />
        </div>

      <div className="p-4 flex flex-col justify-between ml-2">
            <h2 className="text-md font-semibold text-gray-900 line-clamp-3">
                {props.title}
            </h2>

            <div className="text-sm text-gray-500 mt-2">
                <span>{props.source.name}</span>
                <span className="mx-2">•</span>
                <span>{formatVietnameseDate(props.created_at, 2)}</span>
            </div>
      </div>
    </a>
  );
}
