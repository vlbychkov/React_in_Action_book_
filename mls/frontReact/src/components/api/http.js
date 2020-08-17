import axios from 'axios';


export function getPost(){
    const axios = require('axios');
    axios.get('http://127.0.0.1:8000/mls/p/?format=json')
    .then(function(response){
        // console.log(response.data.posts)
        return response.data.posts
    })
    .catch(function(error) {
        console.log(error)
    })
}


export function PostAPost(data){
    console.log(data)
    axios.post('http://127.0.0.1:8000/mls/p/', {
            
                "posts": {
                    content_post: data.content_post,
                    user_post_id: data.user_post_id,
                    uuid_post: data.uuid_post
                }
            
        })
        .catch(function(error){
            console.log(error);
        });
        
    }