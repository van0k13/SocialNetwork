import React from 'react'
import styles from './Users.module.css'


const Pagination = ({totalUsersCount, pageSize, currentUsersPage, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return  <div>
                {pages.map(p => {
                    return <span className={currentUsersPage === p && styles.selectedPage}
                        onClick={(e) => { currentPage(p) }}>{' '}{p}</span>
                })}
            </div>
}

export default Pagination;