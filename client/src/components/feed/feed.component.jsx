import { useEffect,useState } from 'react';
import './feed.style.css';
import Share from '../share/share'
import Post from '../post/Post';
import {Posts} from '../../dummyData'
import axios from 'axios'

export default function Feed() {
  const [posts,setPosts] = useState([]);
  const [text,setText] = useState("");
  
  
  useEffect ( () => {
    axios.get('/timeline/')
    
  },[])

  return (
    <div className='feed'>
    <input type="text" onChange={e => setText(e.target.value)} />
    <div className="feedWrapper">
    <Share/>
   {/* {Posts.map( (p) => (<Post key={p.id} post={p} />)) */}
    </div> 
    </div>
  )
}
