import React from 'react';
import Blog from './Blog'

class BlogWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.Results.map((blogData, index) =>
                    <Blog blogData={blogData} key={index} />
                )}
            </div>
        );
    }
}

export default BlogWrapper;