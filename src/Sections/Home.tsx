import arrow from '../../public/svg/main-arrow.svg'
const Home = () => {
    return ( 
        <section id="home" className="flex flex-col pt-24">
            <div className="flex flex-col-reverse justify-between items-center desctop:flex-row">
                <div
                className="h-[600px] w-[min(500px,90%)] flex flex-col justify-between mt-24 bg-background rounded-lg bg-[url(public/images/main-img.jpg)] bg-center bg-[length:500px_600px] hover:bg-[length:550px_650px] duration-500 shadow-small">
                </div>
                <div className="h-[600px] w-[min(500px,90%)] flex flex-col justify-between mt-24 rounded-lg">
                    <h1 className="text-[2rem] tablet:text-[3rem] leading-[60px] tracking-widest">ВИШИВАНКИ РУЧНОЇ РОБОТИ</h1>
                    <a href="#contact"
                        className="group w-[275px] h-[53px] flex items-center justify-around bg-secondary rounded-lg text-primary shadow-md group-hover:shadow-xl shadow-[0px_10px_10px_-7px_#323232] hover:shadow-[0px_30px_10px_-14px_#323232] hover:scale-[105%] duration-300"
                    >
                        <p>ЗАМОВИТИ</p>
                        <img src={arrow} className="translate-x-[-20px] group-hover:translate-x-[20px] duration-500 "/>
                    </a>
                    <a href="#projects" className="group h-[250px] w-[min(500px,90%)] relative hover:translate-x-[-20px] hover:translate-y-[-20px] duration-500">                        
                        <div className="absolute left-[170px] w-[200px] h-[250px] rounded-lg rotate-[10deg] shadow-small brightness-95 translate-y-[10px] group-hover:translate-y-[50px] group-hover:translate-x-[190px]  group-hover:rotate-[25deg] group-hover:scale-[110%] duration-500 group-hover:shadow-custom hover:brightness-105 bg-[url(public/images/img-3.jpg)] bg-center bg-[length:200px_250px] hover:bg-[length:250px_300px]" 
                        />
                        <div className="absolute left-[70px] w-[200px] h-[250px] rounded-lg rotate-[5deg] shadow-small brightness-95 group-hover:translate-x-[120px] group-hover:translate-y-[10px] group-hover:rotate-[10deg] group-hover:scale-[110%] group-hover:shadow-custom duration-500 hover:brightness-105 bg-[url(public/images/img-2.jpg)] bg-center bg-[length:200px_250px] hover:bg-[length:250px_300px] bg-cover" 
                        />
                        <div className="absolute h-[250px] w-[200px] rounded-lg shadow-small group-hover:shadow-custom brightness-95 group-hover:scale-[120%] duration-500 hover:brightness-105 bg-[url(public/images/img-1.jpg)] bg-center bg-[length:200px_250px] hover:bg-[length:250px_300px]" 
                        />
                    </a>
                </div>
            </div>
        </section>
     );
}
 
export default Home;