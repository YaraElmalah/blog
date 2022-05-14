import React from "react";
import { connect } from 'react-redux';
import {fetchPosts} from '../actions';


class PostList extends React.Component{
    render(){
        console.log(this.props.posts);
        return <div>PostList</div>
    }
    componentDidMount(){
        return this.props.fetchPosts();
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostList);