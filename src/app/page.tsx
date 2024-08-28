import React from "react"
import image from "next/image"
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 m dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/nsd.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I have seen scale
          on large teams. It is easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page