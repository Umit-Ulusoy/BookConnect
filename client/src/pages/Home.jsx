import React from 'react'
import Announcement from '../components/Announcement'
import LeadershipTable from '../components/LeadershipTable'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Announcement />
        <header>
            <h3>BookConnect</h3>
            <div className='profile'>
                <img />
                <p>Profile Name</p>
            </div>
        </header>
        <hr/>
        <div>
        <main>
            <Content />
            <LeadershipTable />
        </main>
        <Footer />
        </div>
    </div>
  )
}

export default Home