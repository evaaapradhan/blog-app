import "./headline.css"

export default function Headline() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="/assets/blog.jpg" alt=""></img>
    </div>
  )
}
