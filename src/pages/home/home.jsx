import Feed from "../../components/feed/feed.component";
import Rightbar from "../../components/rightbar/rightbar.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Topbar from "../../components/topbar/topbar.component";
import './home.css'

function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home;