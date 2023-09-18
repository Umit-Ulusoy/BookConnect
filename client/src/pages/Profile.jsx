import Announcement from "../components/Announcement"
import Content from "../components/Content"
import ContentBar from "../components/ContentBar"
import Footer from "../components/Footer"
import LibraryModal from "../components/LibraryModal"

const Profile = () => {
  return (
    <div>
        <Announcement />
        <header>
            <img />
            <p>Profile Name</p>
        </header>
        <hr/>
        <main>
            <LibraryModal />
            <Content />
            <ContentBar />
        </main>
        <Footer />
    </div>
  )
}

export default Profile