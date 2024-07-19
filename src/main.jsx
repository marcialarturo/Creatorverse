import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddCreator from './components/pages/AddCreator.jsx'
import ViewCreator from './components/pages/ViewCreator.jsx'
import EditCreator from './components/pages/EditCreator.jsx'
import Layout from './components/pages/Layout.jsx'
import ShowCreators from './components/pages/ShowCreators.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShowCreators />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/view-creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
