import React, { useEffect, useState } from 'react'
import Search from '../common/Search'
import { useNavigate } from 'react-router-dom'
import { PencilIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { supabase } from '../../client'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'

export default function ShowCreators() {
  const [data, setData] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isReset, setIsReset] = useState(false)
  const navigate = useNavigate()

  const getCreators = async () => {
    const { data, error } = await supabase.from('creators').select('*')
    if (error) {
      console.log(error)
    } else {
      const reverse = data?.reverse()
      setData(reverse)
    }
  }
  useEffect(() => {
    getCreators()
  }, [])

  const handleSearch = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .or(`name.ilike.%${searchTerm}%`, `description.ilike.%${searchTerm}%`)

      if (error) {
        console.error('Error fetching posts:', error.message)
        return
      }
      setData(data || [])
      setIsReset(true)
    } catch (error) {
      console.error('Error searching posts:', error.message)
    }
  }
  const handleReset = async () => {
    try {
      getCreators()
      setIsReset(false)
      setSearchTerm('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        isReset={isReset}
        handleReset={handleReset}
      />
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
