import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="mb-6 bg-[rebeccapurple]">
    <div className="max-w-[960px] px-4 py-6 mx-auto my-0">
      <h1 className="text-4xl font-bold">
        <Link
          to="/"
          className="text-white no-underline"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
