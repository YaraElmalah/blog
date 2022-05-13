import React from "react";
import { connect } from 'react-redux';
import {fetchPosts} from '../actions';


class PostList extends React.Component{
    render(){
        return <div>PostList</div>
    }
    componentDidMount(){
        return this.props.fetchPosts();
    }
}

export default connect(null, {fetchPosts})(PostList);