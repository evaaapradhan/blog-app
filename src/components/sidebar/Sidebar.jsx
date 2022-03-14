import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">
          About Me
        </span>
        <img className="sidebarImg" src="https://i.pinimg.com/474x/b1/8c/8a/b18c8a6f44f751f73216c27e1269d43a.jpg" alt=""></img>
        <p className = "sidebarP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          hic dolor in, quas tempore, nihil accusamus exercitationem ipsam </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          Categories
        </span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Fashion</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          Follow Us
        </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>

  )
}
