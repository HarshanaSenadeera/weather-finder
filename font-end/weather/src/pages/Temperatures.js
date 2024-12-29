export const Temperatures = () => {

    return(

        <>

            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <a href="/news">News</a>
                        <span>Rising Temperatures Threaten Ecosystems and Human Health</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post single">
                                    <h2 className="entry-title">Rising Temperatures Threaten Ecosystems and Human Health</h2>
                                    <div className="featured-image"><img src="images/temperaterNN.jpg" alt="Rising Temperatures Impact"/></div>

                                    <div className="entry-content">
                                        <p>As global temperatures continue to rise due to climate change, ecosystems and human health are increasingly at risk. Heatwaves, droughts, and shifting precipitation patterns are placing unprecedented stress on natural systems and populations.</p>

                                        <p>Studies reveal that the past decade has seen a significant rise in average global temperatures, with 2024 on track to be one of the hottest years on record. The impact of this warming trend is being felt around the world, from coral bleaching in the oceans to reduced agricultural yields in many regions.</p>

                                        <blockquote>
                                            <p>"We are living through an era of unprecedented heat, which is having far-reaching consequences for both nature and human health." - Dr. Michael Mann, Climate Scientist</p>
                                        </blockquote>

                                        <p>The heat poses particular dangers for vulnerable populations, including the elderly, children, and those with pre-existing health conditions. Rising temperatures are linked to increased incidents of heat stroke, respiratory issues, and the spread of diseases such as malaria and dengue fever, which thrive in warmer climates.</p>

                                        <p>On the ecological front, species migration patterns are shifting, with many animals moving towards the poles in search of cooler habitats. This is leading to disruptions in food chains and biodiversity loss in areas where species can no longer survive. Ecosystems such as coral reefs and wetlands are among the hardest hit, facing the threat of extinction.</p>

                                        <p>Urgent action is needed to mitigate these impacts, with scientists calling for global efforts to reduce greenhouse gas emissions and adapt to the changing climate through sustainable development practices.</p>
                                    </div>

                                </div>

                            </div>
                            <div className="sidebar col-md-3 col-md-offset-1">
                                <div className="widget">
                                    <h3 className="widget-title">Hot News</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Global heat records broken in 2024</a></li>
                                        <li><a href="#">New climate action agreement by G7</a></li>
                                        <li><a href="#">Green technologies taking center stage</a></li>
                                        <li><a href="#">Fossil fuel industries face new regulations</a></li>
                                        <li><a href="#">Countries adopting zero-emission targets</a></li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Global Warming</a></li>
                                        <li><a href="#">Renewable Energy</a></li>
                                        <li><a href="#">Environmental Policies</a></li>
                                        <li><a href="#">Sustainable Living</a></li>
                                        <li><a href="#">Climate Justice</a></li>
                                    </ul>
                                </div>

                                <div className="widget top-rated">
                                    <h3 className="widget-title">Top rated posts</h3>
                                    <ul>
                                        <li><h3 className="entry-title"><a href="#">Top renewable energy sources for 2024</a></h3><div className="rating"><strong>4.8</strong> (1000 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">The future of electric vehicles</a></h3><div className="rating"><strong>4.7</strong> (950 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Sustainable farming practices gaining momentum</a></h3><div className="rating"><strong>4.6</strong> (890 rates)</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}