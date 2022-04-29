import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../../components/products/productList';
import { useSearchTerms } from '../../utils/hooks/useSearchTerms';
import './search.css'
import leftArrow from './../../images/left-arrow.png';
import rightArrow from './../../images/right-arrow.png';

function Search() {
    const [params] = useSearchParams()
    let query = params.get('q')
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPage] = useState(0)
    const { data: searchObjects = {}, isLoading, error } = useSearchTerms(query, pageNumber)

    const setData = () => {
        setPageNumber(searchObjects.page);
        setTotalPage(searchObjects.total_pages)
    }

    const renderPaginationOptions = () => {
        if(searchObjects.total_pages>1){
            return(
                <div className="paginationWrapper">
                    <img className='leftArrow' src={leftArrow}/>
                    <img className='rightArrow' src={rightArrow}/>
                </div>
            )
        }
    }

    const showResults = () => {
        if(searchObjects.results != undefined && searchObjects.results.length>0){
            //setData()
            return(
                <div>
                    <ProductList list={searchObjects.results}/>
                    {renderPaginationOptions()}
                </div>
            )
        }else{
            return(
                <p>There is not results for your search</p>
            )
        }
    }

    return (
        <div className='search'>
            <h1>Results for "{query}"</h1>
            <div className='searchContent'>
                {showResults()}
            </div>
        </div>
    )
}

export default Search;