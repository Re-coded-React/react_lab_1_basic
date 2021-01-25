import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <img src="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" width="100"/>
                <h1> Title</h1>
                <p>Describtion</p>
                <a href="www.facebook.com">
                    Social Media
                </a>
            </div>
        );
    }
}

export default Profile;
