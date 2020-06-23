import React from 'react'

export default function Pagination(props) {
    const pageNumber = [];
    for (let i=1;i<=Math.ceil(props.totalPosts/props.postPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <section class="page">
            <ul>
                {pageNumber.map(number=>(
                    <li key={number}>
                        <div onClick={()=>props.paginate(number)}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
