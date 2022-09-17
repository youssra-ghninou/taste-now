import CommunButton from './button';

const Blogs = () => {
    const Blogs = [
        {
            id: 1,
            image: '/images/team.png',
            title: 'Get to know ',
            span:'us',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque massa at magna sodales molestie. Phasellus sit amet pretium felis. Curabitur consectetur dui diam. Aliquam aliquet consequat quam ut finibus. Vivamus efficitur facilisis facilisis. Maecenas quis sollicitudin nisi. Fusce vehicula ipsum ante, sed vestibulum augue malesuada id. Cras eget orci eget neque luctus bibendum nec sodales mauris. Maecenas euismod elit ut nibh rutrum, at tempus sapien fermentum.',
        },
        {
            id: 2,
            image: '/images/working.png',
            title: 'Working ',
            span:'outdoors',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque massa at magna sodales molestie. Phasellus sit amet pretium felis. Curabitur consectetur dui diam. Aliquam aliquet consequat quam ut finibus. Vivamus efficitur facilisis facilisis. Maecenas quis sollicitudin nisi. Fusce vehicula ipsum ante, sed vestibulum augue malesuada id. Cras eget orci eget neque luctus bibendum nec sodales mauris. Maecenas euismod elit ut nibh rutrum, at tempus sapien fermentum.',
        },
        {
            id: 3,
            image: '/images/walking.png',
            title: 'Follow ',
            span:'our movement',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque massa at magna sodales molestie. Phasellus sit amet pretium felis. Curabitur consectetur dui diam. Aliquam aliquet consequat quam ut finibus. Vivamus efficitur facilisis facilisis. Maecenas quis sollicitudin nisi. Fusce vehicula ipsum ante, sed vestibulum augue malesuada id. Cras eget orci eget neque luctus bibendum nec sodales mauris. Maecenas euismod elit ut nibh rutrum, at tempus sapien fermentum.',
        },
        {
            id: 4,
            image: '/images/smiling.png',
            title: 'Stay ',
            span:'motivated',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque massa at magna sodales molestie. Phasellus sit amet pretium felis. Curabitur consectetur dui diam. Aliquam aliquet consequat quam ut finibus. Vivamus efficitur facilisis facilisis. Maecenas quis sollicitudin nisi. Fusce vehicula ipsum ante, sed vestibulum augue malesuada id. Cras eget orci eget neque luctus bibendum nec sodales mauris. Maecenas euismod elit ut nibh rutrum, at tempus sapien fermentum.',
        },
    ];
    return ( 
        <>
        <div className="flex flex-col gap-10  mx-5" >
            {Blogs.map(({ id, title, content, image, span}) => {
                return (
                    <div key={id} className="flex flex-col gap-4 shadow-lg lg:gap-24 lg:flex-row items-center px-2 font-poppins  lg:text-left ">
                        <div className=" flex flex-col gap-6">
                            <div className="div flex flex-col lg:flex-row gap-5 lg:gap-20 px-3 items-center">
                                <div className="div flex flex-col gap-5 lg:px-5">
                                    <div className="text text-[28px] font-bold flex gap-1 ">
                                        <div className="">
                                            {title}
                                        </div>
                                        <div className="text-primary">
                                            {span}
                                        </div>
                                    </div>
                                    <div className="text-[14px] font-light">
                                        {content}
                                    </div>
                                    <div className="button lg:pb-5">
                                        <CommunButton text="Read blog"/>
                                    </div>
                                </div>
                            
                            <div className="pb-5 ">
                                <img className="lg:w-[2020px] lg:h-[280px]" src={image} alt={title} />
                            </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </>

     );
}
 
export default Blogs;