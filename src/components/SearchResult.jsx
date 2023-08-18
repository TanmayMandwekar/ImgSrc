import React from "react";
import Nav from "./Nav.jsx";



function SearchResult() {
    return <div style={{marginBottom:"120px"}}>
        <Nav/>
        <container>
            <div className="result" style={{width: "100%"}}>
                <text>Search result : <span>Cats</span></text>
                <div id="gallery" className="resultGrid" style={{width: "100%"}}>
                    {/* <div className="resultImg"></div>
                    <div className="resultImg"></div>
                    <div className="resultImg"></div>
                    <div className="resultImg"></div>
                    <div className="resultImg"></div>
                    <div className="resultImg"></div> */}
                </div>
            </div>
        </container>
    </div>
}

export default SearchResult;