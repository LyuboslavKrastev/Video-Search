// WARNING: both your Access Key and Secret Key must remain confidential.
// The canonical way to use such API keys is to get the client side app to send a request to your backend API.
import GetYoutubeAccessKey from "../secrets/Keys";
import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: GetYoutubeAccessKey()
  }
});
