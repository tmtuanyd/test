import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Tabledata from './Tabledata'

class Teacher extends Component {
   
    render() {
        return (
            <div>
                <Menu/>
                <Header/>
                <section class="tab-nav">
                <div class="container">
                    <ul class="list">
                        <li><a href="/">Teacher</a></li>
                        <li><a href="/">Add new teacher</a></li>
                        <li><a href="/">Add Class for Teacher</a></li>
                    </ul>
                </div>
                    <Tabledata/>
                 </section>
            </div>
        )
    }
}


export default Teacher