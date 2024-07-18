import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'

const post = {
  id: 1,
  name: 'The sky1',
  url: 'google.com',
  description:
    'The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space.',
  imageURL:
    'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  socials: {
    youtube: 'http://www.youtube.com',
    twitter: 'http://www.twitter.com',
    instagram: 'http://www.instagram.com',
  },
}
export default function ViewCreator() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    const id = 123 // Replace with your dynamic ID
    navigate(`/edit/${id}`)
  }
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row   justify-center gap-8 mt-6">
        <div className="w-fullmd:w-1/2  sm:w-2/5">
          <img src={post.imageURL} alt={post.name} />
        </div>
        <div className="w-full md:w-1/2 sm:w-3/5">
          <h1 className="text-blue-300 text-2xl font-bold text-left">
            {post.name}
          </h1>
          <p className="mt-6 text-left text-white text-md justify-start">
            {post.description}
          </p>

          <div className="socials mt-6">
            <div className="flex items-center  gap-2 mt-1">
              <a
                href={post.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="size-4 text-white" />
              </a>
              <p className="text-sm text-gra">@youtube</p>
            </div>

            <div className="flex items-center  gap-2 mt-1">
              <a
                href={post.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="size-4 text-white" />
              </a>
              <p className="text-sm text-gra">@twitter</p>
            </div>

            <div className="flex items-center  gap-2 mt-1">
              <a
                href={post.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="size-4 text-white" />
              </a>
              <p className="text-sm text-gra">@instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center gap-2">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 w-[200px]"
        >
          Edit
        </button>

        <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 w-[200px]  ">
          Delete
        </button>
      </div>
    </div>
  )
}
