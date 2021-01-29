import React, { Component } from 'react';

class Post extends Component {
    
    render() {
        return (
            <div>
                Its my first post

              <p> {this.props.name}</p> 
               <img  alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <small>{this.props.genres}</small>
              
            </div>
        );
    }
}

export default Post;
