import Sidebar from "../../componets/sidebar/Sidebar";
import Feeds from "../../componets/feeds/Feeds";
import Rightbar from "../../componets/rightbar/Rightbar";

import Topbar from "../../componets/topbar/tobar";

import "./home.css"

const Home = () => {
  return (
     <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </div>
    </div>
  );
};

export default Home;
