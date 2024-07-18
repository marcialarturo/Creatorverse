import React, { useEffect, useState } from 'react'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'

export default function EditCreator() {
  const id = useParams()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    youtube: '',
    twitter: '',
    instagram: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  useEffect(() => {
    const fetchPost = async () => {
      // fetch data by id
      const post = {
        id: 1,
        name: 'The sky1',
        url: 'google.com',
        description:
          'The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space.',
        imageURL:
          'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        youtube: 'http://www.youtube.com',
        twitter: 'http://www.twitter.com',
        instagram: 'http://www.instagram.com',
      }
      setFormData({
        name: post.name || '',
        imageURL: post.imageURL || '',
        description: post.description || '',
        youtube: post.youtube || '',
        twitter: post.twitter || '',
        instagram: post.instagram || '',
      })
    }
    fetchPost()
  }, [])

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg pg-8 bg-whote shadow-md rounded-lg "
      >
        <h2 className="text-2xl font-bold mb-6  text-white ">Edit Post</h2>

        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2 text-left"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500  "
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-100 text-sm font-bold mb-2 text-left"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.imageURL || ''}
            onChange={handleChange}
            className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-blue"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-100 text-sm font-bold mb-1 text-left  "
          >
            Description
          </label>
          <p className=" text-gray-400 text-xs mb-2 text-left">
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue "
            required
          ></textarea>
        </div>

        <h2 className="text-2xl font-bold mb-1  text-blue-400 text-left">
          Social Media Links
        </h2>
        <p className=" text-gray-400 text-xs mb-2 text-left">
          Provide at least one of the creator's social media links.
        </p>

        <div className="mb-4">
          <div className="flex gap-1">
            <FaYoutube className="size-4 text-white" />
            <label
              htmlFor="youtube"
              className="block text-gray-100 text-sm font-bold text-left  "
            >
              The creator's YouTube handle (without the @)
            </label>
          </div>
          <input
            type="text"
            id="youtube"
            name="youtube"
            value={formData.youtube || ''}
            onChange={handleChange}
            className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue  "
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex gap-1">
            <FaTwitter className="size-4 text-white" />
            <label
              htmlFor="twitter"
              className="block text-gray-100 text-sm font-bold text-left  "
            >
              The creator's Twitter handle (without the @)
            </label>
          </div>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formData.twitter || ''}
            onChange={handleChange}
            className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue  "
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex gap-1">
            <FaInstagram className="size-4 text-white" />
            <label
              htmlFor="youtube"
              className="block text-gray-100 text-sm font-bold text-left  "
            >
              The creator's Instagram handle (without the @)
            </label>
          </div>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram || ''}
            onChange={handleChange}
            className="w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue  "
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  "
        >
          Submit
        </button>
      </form>
    </div>
  )
}
