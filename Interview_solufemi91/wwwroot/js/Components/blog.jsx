import React from 'react';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayPostComments: false };
    }

    render() {
        return (
            <div onClick={() => this.showDetailsOfPost() }>
                <h1>{this.props.blogData.Title}</h1>
                <p>Published on : {this.props.blogData.PublishedOn}</p>
                <p>Number of Comments: {this.props.blogData.BlogComments.length}</p>
                <div style={{ display: this.state.displayPostComments ? "block" : "none" }}>
                    {this.props.blogData.BlogComments.map((blogComment) =>
                        <div>
                            <p>{blogComment.Comment}</p>
                            <p>Posted on: {blogComment.CommentedOn}</p>
                        </div>                       
                    )}
                </div>
            </div>
        );
    }

    showDetailsOfPost() {
        this.setState(state => ({
            displayPostComments: !state.displayPostComments
        }));
    }
}

export default Blog;
