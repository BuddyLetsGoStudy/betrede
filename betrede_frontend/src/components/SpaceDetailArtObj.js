import React from 'react'

const SpaceDetailArtObj = (props) => {
  return(
      <div className='col-lg-4 col-md-6 col-12 space_detail_artobj_cont'>
        <img src={props.upload} />
        <h3>{props.name}</h3>
        <h6 className='text-muted'>
          {
            props.tags.map(tag =>
              tag.name + " "
            )
          }
        </h6>
      </div>
  )
}

export default SpaceDetailArtObj
