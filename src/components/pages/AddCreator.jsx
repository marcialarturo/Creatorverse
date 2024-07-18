import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'

export default function AddCreator() {
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
  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg pg-8 bg-whote shadow-md rounded-lg "
      >
        <h2 className="text-2xl font-bold mb-6  text-white ">
          Create New Post
        </h2>

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
            value={formData.name}
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
            value={formData.Image}
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
            value={formData.description}
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
            value={formData.youtube}
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
            value={formData.twitter}
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
            value={formData.instagram}
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
