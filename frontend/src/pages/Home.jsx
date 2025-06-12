import ArticleCard_Large from "../components/ArticleCard_Large"
import ArticlesColumn from "../components/ArticlesColumn"

export default function Home(){
    return(
        <div className="container mx-auto">
            { /* Latest articles */ }
            <div>
                <p className="text-2xl font-semibold my-6">Latest articles:</p>

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

            <div>
                <p className="text-2xl font-semibold my-6">Thể loại</p>

                <div className="grid grid-cols-4 gap-x-2">
                    <ArticlesColumn></ArticlesColumn>
                    <ArticlesColumn></ArticlesColumn>
                    <ArticlesColumn></ArticlesColumn>
                    <ArticlesColumn></ArticlesColumn>
                </div>
            </div>
        </div>
    )
}