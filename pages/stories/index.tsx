import type { NextPage} from 'next'
import React from 'react';

const Stories: NextPage = () => {
  const website: string = "https://lab1.dtma86dor8lfe.amplifyapp.com/";
  return (
    <div>
      <h1>
        Stories
      </h1>
      <div className="flex space-x-10 flex-wrap overflow-hidden">
        <ul>
          <li><a href={website + "/stories/7"}>
            <button type="button" className="m-2 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Story Number: 7</button>
            </a></li>
          <li><a href={website + "/stories/13"}>
            <button type="button" className="m-2 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Story Number: 13</button></a></li>
          <li><a href={website + "/stories/19"}>
            <button type="button" className="m-2 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Story Number: 19</button>
          </a></li>
          <li><a href={website + "/stories/27"}>
            <button type="button" className="m-2 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Story Number: 27</button>
            </a></li>
          <li><a href={website + "stories/33"}>
            <button type="button" className="m-2 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Story Number: 33</button>
            </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Stories