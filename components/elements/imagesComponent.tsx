function ImagesComponent(currentItems: any) {
    const imageStyles = "m-2";
    const images : string[] = currentItems.images;
    return (
      <>
        { 
          images.map(function(image, i){
            return <img className={imageStyles} key={i} src={image}></img>;
        })}
      </>
    );
  };

export default ImagesComponent;