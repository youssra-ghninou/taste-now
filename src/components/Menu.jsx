import CommunButton from "./button";

const Menu = () => {
    const   Menu = [
        {
            id: 1,
            image: '/images/pizza1.png',
            title: 'Pepperoni Pizza',
            origin: 'Di napoles',
            price: '$11,99',
        },
        {
            id: 2,
            image: '/images/pizza2.png',
            title: 'Pepperoni Pizza',
            origin: 'Di napoles',
            price: '$13,99',
        },
        {
            id: 3,
            image: '/images/pizza3.png',
            title: 'Vegetarian Pizza',
            origin: 'Cosa di Mario',
            price: '$12,99',
        },
        {
            id: 4,
            image: '/images/pizza4.png',
            title: 'Mediterranean Pizza',
            origin: 'Milano',
            price: '$14,99',
        },
    ];
    return (
        <>
            <div className="flex flex-col lg:flex-row  gap-6 items-center  font-poppins " id='Menu'>
                {Menu.map(({ id, title, origin, image, price}) => {
                    return (
                        <div key={id} className="rounded-[5px] py-10 h-[320px]  gap-2  items-center  bg-white flex flex-col text-center  ">
                            <div className="">
                                <img className="rounded-[10px] w-[220px] h-[120px] " src={image} alt={title} />
                            </div>
                                <div className="flex items-center text-[16px] font-medium ">
                                    {title}
                                </div>
                                <div className="text-[13px] font-light">
                                    {origin}
                                </div>
                                <div className="text-[13px] font-medium">
                                    {price}
                                </div>
                                <div>
                                <CommunButton text="Add to cart"/>
                                </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Menu;