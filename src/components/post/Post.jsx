import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://data.whicdn.com/images/303277676/original.jpg?t=1513297995" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCats">Music</span>
                <span className="postCats">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>

        </div>
        <p className="postDec">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Consectetur, officia. Iusto, error! 
            Ad ipsam maxime impedit, vitae commodi sequi id. Ipsum excepturi illo est! 
        </p>
    </div>
  )
}
