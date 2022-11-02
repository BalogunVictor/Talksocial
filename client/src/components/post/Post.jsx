import "./post.css"
import { MoreVert } from "@material-ui/icons"
import {Users} from '../../dummyData'
import { useState } from "react"

export default function Post({post}) {
  const [like,setLike] = useState(post.like);
  const [isliked,setIslike] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1)
    setIslike(!isliked)
  }
  return (

    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter( (u) => u.id === post.userId)[0].profilePicture} alt="" />
            <span className="postUsername">{Users.filter( (u) => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
          <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img src= {PF+post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
            <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommetText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
