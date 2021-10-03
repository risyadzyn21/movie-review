import React, { useState } from "react"
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { Tabs, Tab } from "react-bootstrap";
import './MovieDetail.css'
import SectionButtonCss from './MovieDetailSectionBtn.module.css'
import OverviewSection from '../overview-section/OverviewSection'
import CastSection from "../cast-section/CastSection";
import ReviewSection from "../review-section/ReviewSection";



function MovieDetailSectionBtn({ movieId }) {
  const [activeFilter, setActiveFilter] = useState('Overview')

  const sections = ['Overview', 'Review', 'Characters']

  return (
    <>
      <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className={SectionButtonCss.filterContainer}>
        <Tab eventKey="overview" title="Overview" >
          <OverviewSection movieId={movieId} />
        </Tab>
        <Tab eventKey="casts" title="Casts" >
          <CastSection movieId={movieId} />
        </Tab>
        <Tab eventKey="review" title="Review">
          <ReviewSection movieId={movieId} />
        </Tab>
      </Tabs>


      {/* <div className={SectionButtonCss.filterContainer}>
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
    </div> */}


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