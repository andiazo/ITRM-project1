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
    }

    render() {
        var pL = [];
        this.props.posts?.forEach((post) => {
            pL.push(
                <div key={post.id}>{post.title}</div>
          );
        });
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