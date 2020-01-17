import React from 'react';
import { motion } from 'framer-motion';
import tree from './tree.svg'

import '../App.css';

function Contact() {
    return (
        <div className="container">
            <motion.div style={{
                width: 1000,
                height: 1000,
                borderRadius: 600,
                background: '#44af69',
                position: 'absolute',
                zIndex: 1,
                boxShadow: '0px 3px 10px rgba(0, 0,0,1)'

            }}
                initial={{
                    x: 850,
                    y: 750
                }}
                animate={{
                    x: 850,
                    y: 400,

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
                zIndex: 0,
                boxShadow: '0px 3px 10px rgba(0, 0,0,0.5)'

            }}
                initial={{
                    x: 450,
                    y: 750
                }}

                animate={{
                    x: 450,
                    y: 500
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
            </motion.div> */}







        </div>

    );
}



export default Contact;