import React, {useEffect, useState} from 'react'
import Card from './Card'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
import {articles} from "./data.js";

const News = (props)=>{
    
    const [loading, setLoading] = useState(true)
    const [search,setSearch] = useState('');
    const filteredPosts = articles.filter((article) => article.title.includes(search.toLowerCase()))
   


 
        return (
            <>

                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}> IIITK  Intra Sports Meet</h1>
                {loading && ""}
                    <div className="container">
                         
                    <div className="row text-center">
                        {filteredPosts.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Card title={element.title ? element.title : ""}  imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    </div> 
            </>
        )
    
}

export default News
