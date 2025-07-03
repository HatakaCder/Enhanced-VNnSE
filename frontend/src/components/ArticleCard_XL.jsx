export default function ArticleCard_XL(props){
    return (
    <a href={props.link} className="grid grid-cols-3 gap-x-16">
        <div>
            <img 
            src={props.img[0].url} 
            alt={props.title} 
            className="w-full max-h-48 object-cover rounded-lg" 
            />
        </div>
        <div className="col-span-2 flex flex-col justify-between h-48">
            <div>
                <h4 className="text-2xl font-semibold text-gray-900">{props.title}</h4>
            <p className="text-lg text-gray-600 mt-1">{props.summary}</p>
            </div>
            
        
            <div className="flex space-x-6 text-sm text-gray-500 justify-between">
                <span>{props.created_at}</span>
                <span>{props.source.name}</span>
                </div>
        </div>
    </a>
  );
}