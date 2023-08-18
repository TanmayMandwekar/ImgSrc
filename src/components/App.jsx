import React, {useState} from "react";
import $ from 'jquery';


function App() {
    

    const [value,setValue] = useState("");
    const [results,setResults] = useState([]);

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=runeO4zK5-mCfuf1TVg4Y9hlIK9M9k08Z1BY1Uk0k7Y&query=${value}&per_page=48&orientation=squarish`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data);
           setResults(data.results);
        })
    }

    

    return <div>
        {/* Homepage */}
        <div id="homePage" className="homepageWrapper" >
        <container style={{height:"100%"}}>
            <div className="centerAlign" style={{height:"100%"}}>
                <div className="homesearch">
                    <div >
                        <h1 className="homeLogo">Img<span style={{color:"#828282"}}>src</span></h1>
                        <div className="searchField">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Image" clip-path="url(#clip0_335_60)">
                            <path id="Vector" d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M19.5 13.5C20.0523 13.5 20.5 13.0523 20.5 12.5C20.5 11.9477 20.0523 11.5 19.5 11.5C18.9477 11.5 18.5 11.9477 18.5 12.5C18.5 13.0523 18.9477 13.5 19.5 13.5Z" fill="black"/>
                            <path id="Vector_3" d="M18.4136 20.5002L21.6248 17.2927C21.8123 17.1053 22.0666 17 22.3317 17C22.5968 17 22.8511 17.1053 23.0386 17.2927L27.9998 22.2577" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_4" d="M4 21.0861L10.7925 14.2923C10.8854 14.1993 10.9957 14.1256 11.1171 14.0753C11.2385 14.0249 11.3686 13.999 11.5 13.999C11.6314 13.999 11.7615 14.0249 11.8829 14.0753C12.0043 14.1256 12.1146 14.1993 12.2075 14.2923L23.9137 25.9998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_335_60">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <input style={{width:"100%"}} type="text" value={value} onChange={(e)=> setValue(e.target.value)}></input>
                            <button id="homeGo" onClick={() => fetchImages()}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ArrowCircleRight" clip-path="url(#clip0_335_66)">
                                <path id="Vector" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_2" d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_3" d="M17 12L21 16L17 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_335_66">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                        </div>
                        <div className="trendingSearch">
                            <h5>Trending :</h5>
                            <text>Cat</text>
                            <text>Dog</text>
                            <text>Wallpapers</text>
                        </div>
                    </div>
                </div>
            </div>
        </container>
        </div>

        {/* Result Page */}
    <div id="#resultPage">
        {/* Nav */}
        <div className='navBg' style={{width: "100%"}}>
        <container>
            <div className="navContainer" style={{width: "100%"}}>
                <h1 className="navLogo">Img<span style={{color:"#828282"}}>src</span></h1>
                <div className="searchNav">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Image" clip-path="url(#clip0_335_60)">
                            <path id="Vector" d="M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_2" d="M19.5 13.5C20.0523 13.5 20.5 13.0523 20.5 12.5C20.5 11.9477 20.0523 11.5 19.5 11.5C18.9477 11.5 18.5 11.9477 18.5 12.5C18.5 13.0523 18.9477 13.5 19.5 13.5Z" fill="black"/>
                            <path id="Vector_3" d="M18.4136 20.5002L21.6248 17.2927C21.8123 17.1053 22.0666 17 22.3317 17C22.5968 17 22.8511 17.1053 23.0386 17.2927L27.9998 22.2577" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path id="Vector_4" d="M4 21.0861L10.7925 14.2923C10.8854 14.1993 10.9957 14.1256 11.1171 14.0753C11.2385 14.0249 11.3686 13.999 11.5 13.999C11.6314 13.999 11.7615 14.0249 11.8829 14.0753C12.0043 14.1256 12.1146 14.1993 12.2075 14.2923L23.9137 25.9998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_335_60">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <input style={{width:"100%"}} type="text" value={value} onChange={(e)=> setValue(e.target.value)} ></input>
                            <button  onClick={() => fetchImages()}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="ArrowCircleRight" clip-path="url(#clip0_335_66)">
                                <path id="Vector" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_2" d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path id="Vector_3" d="M17 12L21 16L17 20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_335_66">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </button>
                </div>  
                {/* <div className='navTrending'>
                    <text>Love</text>
                    <text>Flowers</text>
                    <text>Cat</text>
                    <text>Wallpapers</text>
                </div> */}
                <a href='https://tanmaymandwekar.github.io/Portfolio/' rel="noreferrer noopener" target="_blank"><text className='devLink'>dev&#60;&#62;</text></a>
            </div>
        </container>
        </div>

        {/* Results */}
        <div style={{marginBottom:"120px"}}>
        <container>
            <div className="result" style={{width: "100%"}}>
                <text>Search result : <span>{value}</span></text>
                <div id="gallery" className="resultGrid" style={{width: "100%"}}>
                {results.map((item) => {
                    return <img className="resultImg" key={item.id} src={item.urls.regular} />
                })}
                </div>
            </div>
        </container>
    </div>

    </div>
    </div>
    function ScrollEvent() {
    const homeBtn = document.getElementById('homeGo');
    if(homeBtn.click) {
        const resultPage = document.getElementById('resultPage');
        const homePage = document.getElementById('homePage');

        // Unhide the #resultPage div
        resultPage.style.display = 'block';

        // Scroll to the #resultPage div
        window.scrollTo({
        top: resultPage.offsetTop,
        behavior: 'smooth'
         });

         // Hide the #homepage div
        homePage.style.display = 'none';
    };
    }
    ScrollEvent() ;
}

export default App;