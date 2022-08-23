import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import './post.css'

const Post = () => {
    // const [like,setLike] = useState(post.like)
    // const [isLiked,setIsLiked] = useState(false)
  
    // const likeHandler =()=>{
    //   setLike(isLiked ? like-1 : like+1)
    //   setIsLiked(!isLiked)
    
  return (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                {/* <img
                  className="postProfileImg"
                  src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                  alt=""
                /> */}
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                
                <span className="postUsername">
                  {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
               ELIJAH KUNGU
                </span>
                <span className="postDate">
                    {/* {post.date} */}
                    5 mins Ago
                    </span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">
                {/* {post?.desc} */}
                </span>
              {/* <img className="postImg" src={post.photo} alt="" /> */}
              <img className="postImg" src="/assets/post/1.jpeg" alt="" srcset="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className="likeIcon" src="assets/like.png"  alt="" />
                <img className="likeIcon" src="assets/heart.png" alt="" />
                <span className="postLikeCounter">
                    {/* {like}  */}
                   32 people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">
                {/* {post.comment} */}
                   20  comments
                     </span>
              </div>
            </div>
          </div>
        </div>
  )
    }
  


export default Post