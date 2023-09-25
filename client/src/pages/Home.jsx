import Announcement from '../components/Announcement'
import LeadershipTable from '../components/LeadershipTable'
import Content from '../components/Content'
import Footer from '../components/Footer'
import img from '../assets/profilepic.jpg'
import LeftBar from '../components/LeftBar'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <Announcement />
        <header className='flex justify-between items-center w-full h-[70px] px-5 shadow-sm border-b border-[#155B6A]'>
            <h3 className='font-semibold text-xl md:text-2xl'>BookConnect</h3>
            <div className='flex gap-5 items-center'>
                <img className='rounded-full w-[60px] h-[60px]' src={img} />
                <p>Profile Name</p>
            </div>
        </header>
        <main className="flex flex-row w-full gap-5 px-4 mt-20">
         <LeftBar />
         <Content /> 
         <LeadershipTable/>  
         </main>
         <Footer />  
        
    </div>
    
  )
}

export default Home
