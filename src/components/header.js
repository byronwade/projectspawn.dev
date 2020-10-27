//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header className="sticky">
      <div className="nav">
        <div className="container">
          <div className="header">
            <div className="branding">
              <a href="https://github.com/byronwade/ProjectSpawn">Project Spawn</a>
            </div>
            <div className="menu">
              <a className="menuItem" href="https://github.com/byronwade/ProjectSpawn">Github</a>
              <a className="menuItem coffee" href="https://buymeacoffee.com/VFYLE26">Coffee?</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Project Spawn`,
}

export default Header
