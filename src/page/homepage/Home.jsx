import Headline from "../../components/headline/Headline"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Headline />
      <div className="home">
         <Posts />
         <Sidebar />
        
      </div>
    </>

  )
}
