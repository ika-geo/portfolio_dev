
interface ContactItem{
    img: string,
    text: string
    href: string
    target: boolean
}


const contactItems: ContactItem[] = [
    {
        img: 'phone.png',
        text: '+995-599-87-32-31',
        href: 'tel:+995599873231',
        target: false
    },
    {
        img: 'viber.png',
        text: 'Viber Chat',
        href: 'viber://chat/?number=%2B995599873231',
        target: true
    },
    {
        img: 'whatsapp.png',
        text: 'Whatsapp Chat',
        href: 'https://api.whatsapp.com/send?phone=995599873231',
        target: true
    },
    {
        img: 'email.png',
        text: 'Send mail',
        href: 'mailto:ikagele.scorp@gmail.com',
        target: false
    },
    {
        img: 'github.png',
        text: 'Github Page',
        href: 'https://github.com/ika-geo',
        target: true
    },

    {
        img: 'location.png',
        text: 'Tbilisi, Georgia. GMT+4',
        href: 'https://www.google.com/maps/place/%D0%A2%D0%B1%D0%B8%D0%BB%D0%B8%D1%81%D0%B8/@41.7325661,44.7688132,12z/data=!3m1!4b1!4m5!3m4!1s0x40440cd7e64f626b:0x61d084ede2576ea3!8m2!3d41.7151377!4d44.827096',
        target: true
    }
]


const Contact = () => {
    return (
        <div className='contact' id='Contact'>
            <h2 className='subtitle'>Contact</h2>
            <ul className='contactItems grid2'>
                {contactItems.map(item =>
                    <li className='contact__item flex'>
                        <img src={require('../assets/img/contact/' + item.img)} alt={item.img}/>
                        <a className='text' target={item.target?'_blank':'_self'} href={item.href}>{item.text}</a>
                    </li>
                )
                }
            </ul>
        </div>
    );
};

export default Contact;