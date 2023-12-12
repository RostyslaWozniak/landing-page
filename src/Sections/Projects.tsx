
import ImageElement from '../Components/ImageElement'

const Projects = () => {

    const images = [
        {url: 'public/images/projects/img-1.jpg', urlHover: 'public/images/projects/img-1-1.jpg'},
        {url: 'public/images/projects/img-2.jpg', urlHover: 'public/images/projects/img-2-1.jpg'},
        {url: 'public/images/projects/img-3.jpg'},
        {url: 'public/images/projects/img-4.jpg', urlHover: 'public/images/projects/img-4-1.jpg'},
        {url: 'public/images/projects/img-5.jpg', urlHover: 'public/images/projects/img-5-1.jpg'},
        {url: 'public/images/projects/img-6.jpg'},
        {url: 'public/images/projects/img-7.jpg'},
        {url: 'public/images/projects/img-8.jpg', urlHover: 'public/images/projects/img-8-1.jpg'},
        {url: 'public/images/projects/img-9.jpg', urlHover: 'public/images/projects/img-9-1.jpg'}
    ];

    const showImages = images.map((image, indx) => {
        return(
            <ImageElement key={indx} image={image}/>                                                        
    )})
    return ( 
        <section id="projects" className="flex flex-col px-[50px]">
            <h1 className="mb-24 text-4xl text-center">ВИШИВАНКИ</h1>
            <div className="grid place-items-center grid-cols-1 tablet:grid-cols-2 desctop:grid-cols-3 gap-24">
                {showImages}
            </div>
        </section>
     );
}
 
export default Projects;