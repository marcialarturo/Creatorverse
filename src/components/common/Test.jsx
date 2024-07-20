import React, { useEffect } from 'react'
import $ from 'jquery' // Ensure jQuery is installed and imported

const ParallaxHero = () => {
  useEffect(() => {
    const bindScroll = () => {
      $(window).on('scroll', () => {
        const scrolled = $(window).scrollTop()
        const element = '.hero'

        // Move & fade the H1 on scroll.
        $(`${element} h1`).css({
          top: `${scrolled * 0.7}px`,
          opacity: `${1 - (scrolled / $(element).outerHeight()) * 1.8}`,
        })

        // Move & zoom the hero background image
        $(element).css({
          'background-position': `50% calc(50% + ${scrolled * 0.2}px)`,
          'background-size': `${
            200 + (scrolled * 50) / $(element).outerHeight()
          }%`,
        })

        // Fade the extra rainbow div just in case it's visible
        $(`${element} .optional-rainbow`).css(
          'opacity',
          `${0.4 + scrolled / $(element).outerHeight()}`,
        )
      })

      // Handle click event for selectable
      $('.selectable').on('click', (e) => {
        $('.selectable').toggleClass('on')
        $('.hero').toggleClass('fadeout')
      })
    }

    const sampleScroll = () => {
      setTimeout(function () {
        window.scrollTo(500, 2000)
      }, 500)
    }

    // Initialization on component mount
    bindScroll()
    sampleScroll()

    // Cleanup on unmount (if needed)
    return () => {
      $(window).off('scroll')
      $('.selectable').off('click')
    }
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="hero">
      <h1>Parallax Hero Example</h1>
      <div className="optional-rainbow"></div>
      <button className="selectable">Toggle Rainbow</button>
    </div>
  )
}

export default ParallaxHero
