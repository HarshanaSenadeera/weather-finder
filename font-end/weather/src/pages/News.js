export const News = () => {

    return(

        <>

            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>News</span>
                    </div>
                </div>


                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <h2 className="entry-title">Global Efforts to Combat Climate Change Ramp Up</h2>
                                    <div className="featured-image"><img src="images/climateN.jpg" alt="Climate Action" className="custom-image"/></div>
                                    <p>Countries across the globe are intensifying efforts to mitigate the effects of climate change. Major cities are adopting green energy solutions, while international agreements like the Paris Accord push for more ambitious climate goals.</p>
                                    <a href="/climate" className="button">Read more</a>
                                </div>

                                <div className="post">
                                    <h2 className="entry-title">Rising Temperatures Threaten Ecosystems and Human Health</h2>
                                    <div className="featured-image"><img src="images/temperatureN.jpg" alt="Rising Temperatures" className="custom-image"/></div>
                                    <p>As global temperatures continue to rise, scientists warn of severe impacts on both ecosystems and human health. Heatwaves, droughts, and changing precipitation patterns are just a few of the challenges we face.</p>
                                    <a href="/temperatures" className="button">Read more</a>
                                </div>

                                <div className="post">
                                    <h2 className="entry-title">Innovations in Weather Forecasting: What’s Next?</h2>
                                    <div className="featured-image"><img src="images/innovationN.jpeg" alt="Weather Forecasting" className="custom-image"/></div>
                                    <p>New advancements in weather forecasting technology are helping us better predict and prepare for extreme weather events. From AI-driven models to satellite data, the future of forecasting is bright.</p>
                                    <a href="/innovation" className="button">Read more</a>
                                </div>
                            </div>

                            <div className="sidebar col-md-3 col-md-offset-1">
                                <div className="widget">
                                    <h3 className="widget-title">Hot News</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Breakthrough in Renewable Energy</a></li>
                                        <li><a href="#">Global Vaccine Rollout Progress</a></li>
                                        <li><a href="#">New Innovations in AI Technology</a></li>
                                        <li><a href="#">Economic Summit Highlights</a></li>
                                        <li><a href="#">Latest Sports Updates</a></li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Politics</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Environment</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Health</a></li>
                                        <li><a href="#">Sports</a></li>
                                        <li><a href="#">Entertainment</a></li>
                                        <li><a href="#">Science</a></li>
                                    </ul>
                                </div>

                                <div className="widget top-rated">
                                    <h3 className="widget-title">Top Rated Posts</h3>
                                    <ul>
                                        <li><h3 className="entry-title"><a href="#">Renewable Energy Milestone Achieved</a></h3><div className="rating"><strong>4.8</strong> (890 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">AI Advancements Transform Healthcare</a></h3><div className="rating"><strong>4.7</strong> (750 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Economic Recovery in Focus</a></h3><div className="rating"><strong>4.6</strong> (680 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Global Summit Tackles Climate Issues</a></h3><div className="rating"><strong>4.5</strong> (620 rates)</div></li>
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