import React, { useState } from 'react'
import styles from './Users.module.css'


const Pagination = ({totalItemsCount, pageSize, currentUsersPage, currentPage, portionSize}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount =  Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumberPage = (portionNumber -1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    return  <div>
        {portionNumber > 1 && 
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
                {pages
                .filter(p => p>= leftPortionNumberPage && p <= rightPortionNumber)
                .map(p => {
                    return <span className={currentUsersPage === p && styles.selectedPage}
                        onClick={(e) => { currentPage(p) }}>{' '}{p}</span>
                })}
                {portionCount > portionNumber && 
                <button onClick={() => {setPortionNumber(portionNumber + 1) }}>NEXT</button>}
            </div>
}

export default Pagination;