import React from 'react'

export const Testimonials = (props) => {

  const teamMembers = [
    {
      name: 'Divyansh Rastogi',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Harshvardhan Saini',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Ayush Raj Baranwal',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dhruv Agarwal',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dev Chandra Modak',
      imageUrl: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Aarushi Singh',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ]


  return (
    <div className="bg-gray-100 py-12 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <div className='section-title text-center'>
        <h2 className='text-6xl font-semibold'>OUR TEAM</h2>
        </div>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-16 py-24 rounded-lg shadow-lg">
              <img
                className="h-60 w-60 rounded-full mx-auto mb-4"
                src={member.imageUrl}
                alt={member.name}
              />
              <div className="text-center">
                <h3 className="text-2xl mt-10 font-semibold text-gray-900">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
