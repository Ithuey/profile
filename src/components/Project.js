import React from 'react';
import { motion } from 'framer-motion';

import tree from './tree.svg'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../slider-animations.css";
import '../Carousel.css';







const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

function Project() {


    return (
        <div className="container">
            <motion.div style={{
                width: 1000,
                height: 1000,
                borderRadius: 600,
                background: '#44af69',
                position: 'absolute',
                zIndex: 2,
                boxShadow: '0px 3px 10px rgba(0, 0,0,1)'

            }}
                initial={{
                    x: 80,
                    y: 700
                }}
                animate={{
                    x: 80,
                    y: 550,

                }}
                transition={{ duration: 1.60 }}
            />




            <motion.div style={{
                width: 1000,
                height: 1000,
                borderRadius: 600,
                background: '#095256',
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                boxShadow: '0px 3px 10px rgba(0, 0,0,0.5)'

            }}
                initial={{
                    x: 350,
                    y: 700
                }}

                animate={{
                    x: 350,
                    y: 550
                }}
                transition={{ duration: 1.60 }}
            />


            {/* <motion.div
                style={{
                    zIndex: 3,
                    position: 'absolute',
                }}

                initial={{
                    x: 15,
                    y: -200
                }}

                animate={{
                    x: 15,
                    y: 350
                }}
                transition={{ duration: 1.9, type: 'spring', damping: 100 }}
            >
                <img src={tree} className='tree' />
            </motion.div>  */}


            <Slider className="slider-wrapper">
                {content.map((item, index) => (

                    < div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button className="carouselB">{item.button}</button>
                        </div>

                    </div>
                ))
                }
            </Slider >

        </div>

    );
}



export default Project;