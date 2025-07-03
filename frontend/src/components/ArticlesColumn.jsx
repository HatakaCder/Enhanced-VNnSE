import ArticleCard_SmallWide from "./ArticleCard_SmallWide"

export default function ArticlesColumn(props){
    return (
        <div>
            <p className="font-semibold text-xl my-5">
                {props.name}
            </p>
            <div className="grid grid-rows-5 gap-y-2">
                {props.articles.map((art) => (
                    <ArticleCard_SmallWide key={art.id} {...art}></ArticleCard_SmallWide>
                ))}
            </div>
        </div>
    )
}