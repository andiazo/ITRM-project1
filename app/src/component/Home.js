import React from 'react';
import { connect } from 'react-redux';
import { postsList } from '../store/actions';


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    getPostsHandler() {
        this.props.dispatch(postsList())
        this.setState({
            posts: this.props.posts.postsList
        })
        // this.state.posts = this.props.posts.postsList
        console.log(this.state.posts)
    }

    render() {
        var pL = [];
        this.state.posts.forEach((post) => {
            pL.push(
                <div key={post.id}>{post.title}</div>
          );
        });
        console.log(this.props.posts.postsList)
        return(
            <>
                <button onClick={() => this.getPostsHandler()}>
                    Obtener publicaciones
                </button>
                { pL? pL:'' }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Home);