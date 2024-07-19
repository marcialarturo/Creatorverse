import React, { useEffect, useState } from 'react'
import InteractiveHeader from '../common/InteractiveHeader'
import { useNavigate } from 'react-router-dom'
import { PencilIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { supabase } from '../../client'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'

// const data = [
//   {
//     id: 1,
//     name: 'The sky1',
//     url: 'google.com',
//     description:
//       'The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space.',
//     imageURL:
//       'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 2,
//     name: 'The ocean',
//     url: 'ocean.com',
//     description:
//       "The ocean is a body of saline water that composes much of a planet's hydrosphere. It covers approximately 71% of the Earth's surface.",
//     imageURL:
//       'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 3,
//     name: 'The mountains',
//     url: 'mountains.com',
//     description:
//       'A mountain is a large landform that rises prominently above its surroundings, generally exhibiting steep slopes, a confined summit area, and considerable local relief.',
//     imageURL:
//       'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 4,
//     name: 'The forest',
//     url: 'forest.com',
//     description:
//       'A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function.',
//     imageURL:
//       'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 5,
//     name: 'The desert',
//     url: 'desert.com',
//     description:
//       'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Desert-foreground.jpg/1280px-Desert-foreground.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 6,
//     name: 'The city',
//     url: 'city.com',
//     description:
//       'A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/New_York_City_skyline_as_seen_from_New_Jersey.jpg/1280px-New_York_City_skyline_as_seen_from_New_Jersey.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 7,
//     name: 'The river',
//     url: 'river.com',
//     description:
//       'A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake, or another river.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/River_Rhine_in_the_Rheingau.jpg/1280px-River_Rhine_in_the_Rheingau.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 8,
//     name: 'The lake',
//     url: 'lake.com',
//     description:
//       'A lake is an area filled with water, localized in a basin, surrounded by land, apart from any river or other outlet that serves to feed or drain the lake.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Lake_Bled_from_the_Mala_Osojnica_hill.jpg/1280px-Lake_Bled_from_the_Mala_Osojnica_hill.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 9,
//     name: 'The volcano',
//     url: 'volcano.com',
//     description:
//       'A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mt_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg/1280px-Mt_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
//   {
//     id: 10,
//     name: 'The canyon',
//     url: 'canyon.com',
//     description:
//       'A canyon is a deep cleft between escarpments or cliffs resulting from weathering and the erosive activity of a river over geologic timescales.',
//     imageURL:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Grand_Canyon_View_from_South_Rim_1.jpg/1280px-Grand_Canyon_View_from_South_Rim_1.jpg',
//     socials: {
//       youtube: 'http://www.youtube.com',
//       twitter: 'http://www.twitter.com',
//       instagram: 'http://www.instagram.com',
//     },
//   },
// ]
export default function ShowCreators() {
  const [data, setData] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*')
      if (error) {
        console.log(error)
      } else {
        const reverse = data?.reverse()
        setData(reverse)
      }
    }
    getCreators()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap ">
        {data?.length > 0 &&
          data?.map((post) => (
            <div className="relative w-full md:w-1/2 px-2 mb-4" key={post.id}>
              <div
                className=" p-4 rounded-lg shadow bg-image"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundColor: '#414040',
                  backgroundBlendMode: 'overlay',
                }}
              >
                <div className="flex justify-between my-3">
                  <h1 className="text-lg font-bold  text-blue-400">
                    {post.name}
                  </h1>
                  <div className="flex gap-1">
                    <InformationCircleIcon
                      onClick={() => {
                        navigate(`/view-creator/${post.id}`)
                      }}
                      className="size-4 text-white"
                    />

                    <PencilIcon
                      onClick={() => navigate(`/edit/${post.id}`)}
                      className="size-4 text-white justify-end"
                    />
                  </div>
                </div>
                <div className="flex items-end gap-1 mt-1">
                  <a
                    href={`http://www.youtube.com/${post.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="size-4 text-white" />
                  </a>
                  <a
                    href={`http://www.twitter.com/${post.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="size-4 text-white" />
                  </a>
                  <a
                    href={`http://www.instagram.com/${post.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="size-4 text-white" />
                  </a>
                </div>
                <p className="mt-6 text-left text-white text-sm justify-start">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
