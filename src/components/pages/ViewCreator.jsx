import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { supabase } from '../../client'

export default function ViewCreator() {
  const [post, setPost] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getPost = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()
      if (error) {
        console.error(error)
      } else {
        setPost(data)
      }
    }

    getPost()
  }, [id])

  const handleEdit = () => {
    navigate(`/edit/${id}`)
  }
  const handleDelete = async () => {
    const { error } = await supabase.from('creators').delete().eq('id', id)
    if (error) {
      console.error(error)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row   justify-center gap-8 mt-6">
        <div className="w-fullmd:w-1/2  sm:w-2/5">
          <img src={post.image} alt={post.name} />
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
              <a href={post.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="size-4 text-white" />
              </a>
              <p className="text-sm text-gra">@youtube</p>
            </div>

            <div className="flex items-center  gap-2 mt-1">
              <a href={post.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="size-4 text-white" />
              </a>
              <p className="text-sm text-gra">@twitter</p>
            </div>

            <div className="flex items-center  gap-2 mt-1">
              <a
                href={post.instagram}
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
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 w-[200px]"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 w-[200px]  "
        >
          Delete
        </button>
      </div>
    </div>
  )
}
