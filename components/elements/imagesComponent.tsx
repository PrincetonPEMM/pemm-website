import Image from 'next/image';

function ImagesComponent(currentItems: any) {
    const imageStyles = "m-2";
    const images : string[] = currentItems.images;
    return (
      <>
        { 
          images.map(function(image, i){
            return <Image src={image} key={i} className={imageStyles} width={450} height={450}/>
        })}
      </>
    );
  };

export default ImagesComponent;