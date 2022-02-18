import Image from 'next/image';

function ImagesComponent(currentItems: any) {
    const imageStyles = "m-2";
    const images : string[] = currentItems.images;
    return (
      <>
        { 
          images.map(function(image, i){
            return (
            <div className={imageStyles} key={i}> 
              <Image src={image} width={450} height={450}/> 
            </div>
            )
        })}
      </>
    );
  };

export default ImagesComponent;