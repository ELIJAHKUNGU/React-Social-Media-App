import "./message.css";
import { format } from "timeago.js";

export default function Message({own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText"> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis suscipit porro aliquam animi qui reprehenderit saepe vel perferendis, non, facilis quia velit. Voluptatum cumque nulla modi distinctio, nemo placeat.
         </p>
      </div>
      <div className="messageBottom"> 20 mins ago </div>
    </div>
  );
}
