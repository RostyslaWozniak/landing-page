const About = () => {
    return ( 
        <section id="about" className="flex flex-col min-h-full mt-20">
        <div className="flex flex-col justify-between desctop:flex-row">
            <div className="flex flex-col gap-20">
                <h1 className="text-4xl text-center">ПРО МЕНЕ</h1>
                <div className="flex flex-col-reverse desctop:flex-col gap-20">
                    <div className="w-[min(570px,90%)] flex flex-col justify-between mx-auto p-10 bg-accent border rounded-lg shadow-small">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur provident deleniti id cumque aspernatur labore eaque repudiandae reprehenderit ducimus itaque illum ea nemo eveniet sit enim eos architecto  agnam eligendi totam, velit animi at repellendus.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur provident deleniti id cumque aspernatur labore eaque repudiandae reprehenderit ducimus itaque illum ea nemo eveniet sit enim eos architecto  agnam eligendi totam, velit animi at repellendus.</p>
                    </div>
                    <img src="public/images/about-1.jpg" className="w-[min(570px,90%)] mx-auto rounded-lg shadow-small"/>
                </div>
            </div>
            <div className="mt-20 flex flex-col justify-between">
                <img src="public/images/about-2.jpg" className="w-[min(423px,90%)] mx-auto rounded-lg shadow-small"/>
                <img src="public/svg/scissors.svg" className="hidden desctop:block"/>
            </div>
        </div>
       
    </section>
     );
}
 
export default About;