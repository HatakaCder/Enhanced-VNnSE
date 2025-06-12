import ArticleCard_SmallWide from "./ArticleCard_SmallWide"

export default function ArticlesColumn(){
    return (
        <div>
            <p className="font-semibold text-xl mb-2">
                Thể thao
            </p>
            <div className="grid grid-rows-5 gap-y-2">
                <ArticleCard_SmallWide></ArticleCard_SmallWide>
                <ArticleCard_SmallWide></ArticleCard_SmallWide>
                <ArticleCard_SmallWide></ArticleCard_SmallWide>
                <ArticleCard_SmallWide></ArticleCard_SmallWide>
                <ArticleCard_SmallWide></ArticleCard_SmallWide>
            </div>
        </div>
    )
}