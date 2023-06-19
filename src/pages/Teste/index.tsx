import React, { useRef } from 'react'
import { Galleria } from 'primereact/galleria'

export default function WithThumbnailsDemo() {
  const galleria = useRef(null)

  const responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ]
  const images = [
    {
      itemImageSrc: 'https://i.imgur.com/0SVFwPr.png',
      alt: 'teste',
      thumbnailImageSrc: 'https://i.imgur.com/0SVFwPr.png',
    },
    {
      itemImageSrc: 'https://i.imgur.com/0SVFwPr.png',
      alt: 'teste2',
      thumbnailImageSrc: 'https://i.imgur.com/0SVFwPr.png',
    },
    {
      itemImageSrc: 'https://i.imgur.com/0SVFwPr.png',
      alt: 'teste3',
      thumbnailImageSrc: 'https://i.imgur.com/0SVFwPr.png',
    },
  ]
  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: '100%', display: 'block' }}
      />
    )
  }

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        height={40}
        width={40}
        style={{ display: 'block' }}
      />
    )
  }

  return (
    <div className="card flex justify-content-center">
      <Galleria
        ref={galleria}
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={9}
        style={{ maxWidth: '50%' }}
        circular
        fullScreen
        showItemNavigators
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />

      <img
        src="https://i.imgur.com/0SVFwPr.png"
        alt="teste"
        width={40}
        height={40}
        onClick={() => galleria.current.show()}
      />
    </div>
  )
}
