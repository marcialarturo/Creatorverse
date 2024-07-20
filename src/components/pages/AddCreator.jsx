import React, { useState } from 'react'
import { supabase } from '../../client'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
export default function AddCreator() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    youtube: '',
    twitter: '',
    instagram: '',
  })
  const [errors, setErrors] = useState({
    youtube: '',
    twitter: '',
    instagram: '',
  })
  const validateInput = (name, value) => {
    let errorMessage = ''
    if (value.includes('@')) {
      errorMessage = 'Input should not contain @ symbol.'
    } else if (value.includes(' ')) {
      errorMessage = 'Input should not contain spaces.'
    }
    console.log('🚀 ~ AddCreator ~ errors:', errors)

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'youtube' || name === 'instagram' || name === 'twitter') {
      validateInput(name, value)
    }
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('creators').insert([formData])
    if (error) {
      console.error(error)
    } else {
      navigate('/')
    }
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
            className={
              errors.youtube
                ? ' error'
                : 'w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue'
            }
            required
          />
          {errors.youtube && (
            <p className="error-message mt-[-20px] text-left">
              {errors.youtube}{' '}
            </p>
          )}
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
            className={
              errors.twitter
                ? ' error'
                : 'w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue'
            }
          />
          {errors.twitter && (
            <p className="error-message mt-[-20px] text-left">
              {errors.twitter}
            </p>
          )}
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
            className={
              errors.instagram
                ? 'error'
                : 'w-full px-2 py-3 border rounded-lg focus:outline-none focus:ring-blue  '
            }
          />
          {errors.instagram && (
            <p className="error-message mt-[-20px] text-left">
              {errors.instagram}{' '}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.values(errors).some((error) => error)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  "
        >
          Submit
        </button>
      </form>
    </div>
  )
}
