//import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <>
    <footer className="footer">
      <div className="container">
        <div className="socialmedia">
          <a href="mailto:bcw1995@gmail.com">Email Me</a>
          <a href="https://twitter.com/ByronWade18">Twitter</a>
          <a href="https://dribbble.com/byronwade">Dribbble</a>
          <a href="https://github.com/byronwade/ProjectSpawn">Github</a>
        </div>
        <div className="siteInfo"><p>© {new Date().getFullYear()}, built by <a href="https://www.byronwade.com/">Byron Wades Web Development</a> and developed with <a className="purple" href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://reactjs.org/">React</a></p></div>
      </div>
    </footer>
  </>
)

export default Footer
