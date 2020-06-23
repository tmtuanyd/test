import React from 'react'
import Menu from './Menu'
import Header from './Header'
import Tabledata from './Tabledata'
import { useParams, NavLink } from 'react-router-dom'


export default function Student() {
    let {id} = useParams()
    return (
        <div>
            <Menu/>
                <Header/>
                <section class="tab-nav">
                <div class="container">
                    <ul class="list">
                        <li><NavLink activeClassName="click-style" exact to ={"/home/"+id}>{id}</NavLink></li>
                        <li><NavLink activeClassName="click-style" to={"/home/"+id+"/add"}>Add new {id}</NavLink></li>
                        <li><NavLink activeClassName="click-style" to={"/home/"+id+"/edit"}>Add Class for {id}</NavLink></li>
                    </ul>
                </div>
                    <Tabledata/>
                 </section>
        </div>
    )
}
