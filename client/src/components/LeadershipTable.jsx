import img from "../assets/profilepic.jpg"
import { leaderUsers } from "../data"

const LeadershipTable = () => {
  return (
    <section className='hidden md:w-1/3 md:block md:border-separate md:border-2 md:mt-[200px] md:rounded-lg'>
      <div className="h-[130px] border-b-2 flex justify-center items-center">
        <img src={img} className="w-[100px] h-[100px] rounded-full"/>
      </div>
      {leaderUsers.map((item) => (
      <div 
        key={item.id}
        className="h-[80px] border-b-2 flex justify-center items-center ">
       <p className="font-bold">{item.username}</p>
      </div>
      ))}
    </section>
  )
}

export default LeadershipTable
