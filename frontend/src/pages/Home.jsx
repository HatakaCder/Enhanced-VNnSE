import ArticleCard_Large from "../components/ArticleCard_Large"

export default function Home(){
    return(
        <div>
            { /* Latest articles */ }
            <div className="container mx-auto py-5">
                <p className="text-2xl font-semibold mb-6">Latest articles:</p>

                <div className="grid grid-cols-5 grid-rows-2 gap-4">
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                    <ArticleCard_Large></ArticleCard_Large>
                </div>

            </div>
        </div>
    )
}