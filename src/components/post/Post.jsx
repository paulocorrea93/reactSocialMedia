import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [islike, setIslike] = useState(false)

    function likeHandler(){
        setLike(islike ? like-1 : like+1)
        setIslike(!islike)
    }

    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">

                        <div className="postTopLeft">
                            <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImage" />
                            <span className="postUserName">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                            <span className="postDate">{post.date}</span>
                        </div>

                        <div className="postTopRight">
                            <MoreVert />
                        </div>

                    </div>

                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img src={post.photo} alt="" className='postImage'/>
                    </div>

                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img src="./assets/like.png" alt="" className='likeIcon' onClick={likeHandler} />
                            <img src="./assets/heart.png" alt="" className='likeIcon' onClick={likeHandler} />
                            <span className="postLikeCounter">{like}</span>
                        </div>

                        <div className="postBottomRight">
                            <div className="postComeentText">{post.comment}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
