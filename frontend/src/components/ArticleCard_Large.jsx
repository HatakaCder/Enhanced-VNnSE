export default function ArticleCard_Large(props){
    return (
        <a href={props.link} className="block max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <img
                className="w-full h-48 object-cover rounded-2xl"
                src={props.img[0].url}
                alt="Thumbnail"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-3">{props.title}</h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {props.summary}
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                <span>{props.created_at}</span>
                <span>{props.source.name}</span>
                </div>
            </div>
        </a>
    )
}