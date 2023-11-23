import React from 'react'
import { CampProps } from '../interface/camp'
import { PEOPLE_URL } from '../constants'
import { follderMap, img1, img2, quote } from '../images'

const CampSite = ({ backgroundImage, peopleJoined, subtitle, title }: CampProps) => {

   return (
      <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`} style={{ background: `url(${backgroundImage})` }}>
         <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
            <div className="flexCenter gap-4">
               <div className="rounded-full bg-green-50 p-4">
                  <img
                     src={follderMap}
                     alt="map"
                     width={28}
                     height={28}
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <h4 className="bold-18 text-white">{title}</h4>
                  <p className="regular-14 text-white">{subtitle}</p>
               </div>
            </div>

            <div className="flexCenter gap-6">
               <span className="flex -space-x-4 overflow-hidden">
                  {PEOPLE_URL.map((url) => (
                     <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={url}
                        key={url}
                        loading='lazy'
                        alt="person"
                        width={52}
                        height={52}
                     />
                  ))}
               </span>
               <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
            </div>
         </div>
      </div>
   )
}

const Camp = () => {
   return (
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
         <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
            <CampSite
               backgroundImage={img1}
               title="Putuk Truno Camp"
               subtitle="Prigen, Pasuruan"
               peopleJoined="50+ Joined"
            />
            <CampSite
               backgroundImage={img2}
               title="Mountain View Camp"
               subtitle="Somewhere in the Wilderness"
               peopleJoined="50+ Joined"
            />
         </div>

         <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
            <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
               <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                  <strong>Feeling Lost</strong> And Not Knowing The Way?
               </h2>
               <p className="regular-14 xl:regular-16 mt-5 text-white">
                  Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
               </p>
               <img
                  src={quote}
                  alt="camp-2"
                  loading='lazy'
                  width={186}
                  height={219}
                  className="camp-quote"
               />
            </div>
         </div>
      </section>
   )
}

export default Camp