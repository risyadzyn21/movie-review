import React from "react"
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import SectionButtonCss from './MovieDetailSectionBtn.module.css'



function MovieDetailSectionBtn() {
  return (
    <>
      <div className={SectionButtonCss.sectionContainer}>
        <Router>
          <ul className={SectionButtonCss.section}>
            <li>
              <NavLink exact to='/' activeClassName={SectionButtonCss.active}>
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/action' activeClassName={SectionButtonCss.active}>
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink to='/adventure' activeClassName={SectionButtonCss.active}>
                Review
              </NavLink>
            </li>
          </ul>
        </Router>
      </div>
    </>
  )
}

export default MovieDetailSectionBtn