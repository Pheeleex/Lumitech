import member1 from "./Assets/Images/memberq.png"
import member2 from "./Assets/Images/member2.png"
import member3 from "./Assets/Images/member3.png"
import React from 'react'

const Team = () => {
    
const teamMembers = [
    { id: 0, src: member1, name: 'Sunday O.', role: 'Backend Developer', describe:"Sunday O. is a top-rated\nBackend Developer" },
    { id: 1, src: member2, name: 'Samuel Olarenwaju.', role: 'UI/UX designer', describe: "Samuel Olanrewaju is a top rated UI/UX Designer with " },
    { id: 2, src: member3, name: 'Frank John', role: 'Frontend Developer', describe:"Frank John is a top rated Frontend \nDeveloper" }
  ];
  return (
    <div className='team'>
        <div className="team-container">
        <div className="title-box">
                <h1 className="title">Our Team</h1>
                <h2>Our Team</h2>
            </div>
            <p className="lorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br></br> tincidunt sagittis eros. Quisque quis euismod lorem.</p>
        <div className='team-members'>
        {teamMembers.map((member) => (
        <div key={member.id} className='team-member'>
          <div className='image'>
            <img src={member.src} alt={`Member ${member.id}`} />
          </div>
          <div className='description'>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.describe}</p>
          </div>
        </div>
      ))}
        </div>
        </div>
           
    </div>
  )
}

export default Team