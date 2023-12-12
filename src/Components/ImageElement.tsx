import { useState } from "react";
import ShowImageElement from "./ShowImageElement";

type ImageElementProps = {
    image: imageObj
}

type imageObj = {
        url: string;
        urlHover: string;
    } | {
        url: string;
        urlHover?: undefined;
    }

const ImageElement = ({ image } : ImageElementProps) => {
    const [isImgHoverred, setIsImagHoverred] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    return ( 
        <>
            <div 
                style={{backgroundImage: `url(${isImgHoverred ? (image.urlHover ?? image.url) : image.url})`, backgroundSize: "cover", }}
                className={`w-[275px] h-[443px] rounded-lg bg-center shadow-custom duration-500 hover:scale-[105%] hover:shadow-custom-active cursor-pointer`}
                onMouseOver={() => setIsImagHoverred(true)}
                onMouseOut={() => setIsImagHoverred(false)}
                onClick={() => setIsVisible(true)}
            />    
            <ShowImageElement image={image} isVisible={isVisible} setIsVisible={setIsVisible}/>
        </>
     );
     
}
 
export default ImageElement;