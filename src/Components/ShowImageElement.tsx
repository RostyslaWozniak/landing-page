import { Dispatch, SetStateAction } from "react";

type ShowImageElementProps = {
    image: imageObj
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
}
type imageObj = {
    url: string;
    urlHover: string;
} | {
    url: string;
    urlHover?: undefined;
}

const ShowImageElement = ({ image, isVisible, setIsVisible } : ShowImageElementProps) => {
    
    return ( 
        <>
        {isVisible ? 
            (<div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center w-screen h-screen backdrop-blur snap-none" 
                    onClick={() => setIsVisible(false)}
            >
               <img src={image.url} className="h-[90dvh] rounded-lg shadow-[0_0_40px_50px_#fff]" onClick={e => e.stopPropagation()}/> 
            </div>)
        : null}
        </>
     );
}
 
export default ShowImageElement;