import React from 'react'
// import Crad from './Crad'

const Result = ({Details}) => {
  // console.log(Details);
  return (
    <div className='font-aj flex flex-wrap	 '>
             {
          Details.map((e,ind)=>{
            return (
              <div  className=' bg-gray-200  text-center p-3 mx-3 basis-[100%] md:basis-[48%] my-3' key={ind} >
                  <p>{`${e.title}`}</p>
                  {/* {console.log(ind)} */}
              </div>
            )
          })
        }

        


    </div>
  )
}

export default Result