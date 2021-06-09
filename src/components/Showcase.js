import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
            Hire me to<span className="text-purple-500"> Develop </span>
            your site
          </h1>

          <div className="ml-auto lg:ml-0">
            <Link
              to="/hire"
              className="mr-5 bg-purple-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-purple-800"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="mr-5 bg-white text-purple-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-purple-800 hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
