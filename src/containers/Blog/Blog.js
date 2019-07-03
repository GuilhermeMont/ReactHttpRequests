import React, {Component} from 'react';

import './Blog.css';
import Posts from  './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
import {NavLink, Route,Switch,Redirect} from "react-router-dom";


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName={'active'} activeStyle={{color:'red'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts/"  component={Posts} />
                    <Route render={() => <h1>404: Not Found</h1>}/>
                    {/*<Redirect from='/' to={'/posts'}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;