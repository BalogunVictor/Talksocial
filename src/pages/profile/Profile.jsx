import './profile.css'
import Feed from "../../components/feed/feed.component";
import Rightbar from "../../components/rightbar/rightbar.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Topbar from "../../components/topbar/topbar.component";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="assets/post/7.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>blvck</h4>
            <span className="profileInfoDesc">hello my friends! </span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
    </div>
  </>
  )
}
