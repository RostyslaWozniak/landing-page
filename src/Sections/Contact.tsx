const Contact = () => {
    const contactIcons = [
        {name: "www.faceboock.com", url: "public/svg/contact-icons/faceboock.svg"},
        {name: "www.instagram.com", url: "public/svg/contact-icons/instagram.svg"},
        {name: "gmail@example.com", url: "public/svg/contact-icons/email.svg"},
        {name: "+38 000 000 000", url: "public/svg/contact-icons/viber.svg"},
    ]



    const constactElements = contactIcons.map(icon => (
        <div key={icon.name} className="group relative w-[250px] h-[150px] flex justify-center items-end py-[20px] text-[1.2rem] bg-accent rounded-lg border cursor-pointer shadow-small">
            <div style={{borderBottom: '1px solid', borderRight: '1px solid', borderTop: '1px solid transparent', borderLeft: '1px solid transparent'}}  className="absolute top-[-50px] left-[50%] rotate-[45deg] translate-x-[-50%] w-[100px] h-[100px] flex justify-center items-center bg-[url(public/background/EMBROIDERY.jpg)] rounded-[50%]">
                <img src={icon.url} alt={icon.name} className="rotate-[-45deg] group-hover:scale-[120%] group-hover:translate-y-[-10px] group-hover:translate-x-[-10px]  duration-300"/>
            </div>
        <a >{icon.name}</a>

        </div>
    ))
    return ( 
        <section id="contact" className="flex flex-col desctop:flex-row justify-between items-center py-24 gap-24">
            <div className="flex flex-col justify-between items-center gap-24">
                <h1 className="text-4xl text-center">КОНТАКТ</h1>
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-24 tablet:gap-[150px_80px] ">
                    {constactElements}
                </div>
            </div>
            <form action="" className="w-[min(500px,_90%)] h-[700px] flex flex-col justify-between py-[40px] px-[20px] border rounded-lg">
                <label htmlFor="name" className="text-center">ІМ'Я</label>
                <input id="name" type="text" className="px-2 py-1 border rounded"/>

                <label htmlFor="phone-number" className="text-center">НОМЕР ТЕЛЕФОНУ</label>
                <input id="phone-number" type="tel" className="px-2 py-1 border rounded"/>

                <label htmlFor="email" className="text-center">ЕЛЕКТРОННА ПОШТА</label>
                <input id="email" type="email" className="px-2 py-1 border rounded"/>

                <label htmlFor="message" className="text-center">ПОВІДОМЛЕННЯ</label>
                <textarea id="message"className="px-2 py-1 border rounded max-h-[200px] min-h-[200px]" />
                <button className="h-[30px] w-[min(200px,100%)] self-center py-1 bg-accent text-secondary rounded border text-[.8rem] hover:border-secondary hover:bg-secondary hover:text-accent duration-500">НАДІСЛАТИ</button>
            </form>
       
    </section>
     );
}
 
export default Contact;