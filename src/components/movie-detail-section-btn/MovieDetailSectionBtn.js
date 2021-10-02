import React, { useState } from "react"
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import SectionButtonCss from './MovieDetailSectionBtn.module.css'
import OverviewSection from '../overview-section/OverviewSection'



function MovieDetailSectionBtn() {
  const [activeFilter, setActiveFilter] = useState('Overview')

  const sections = ['Overview', 'Review', 'Characters']

  return (
    <>

      <div className={SectionButtonCss.filterContainer}>
        <h3>Browse by category</h3>
        <div className={SectionButtonCss.filters}>
          {sections.map(section => (
            <button
              key={section}
              onClick={() => setActiveFilter(section)}
              className={`${SectionButtonCss.filtersItem} ${section === activeFilter ? SectionButtonCss.active : ''}`}>
              {section}
            </button>
          ))}
        </div>
      </div>


      {/* <div className={SectionButtonCss.sectionContainer}>
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
      </div> */}
    </>
  )
}

export default MovieDetailSectionBtn