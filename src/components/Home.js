import React, { useState } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import tree from './tree.svg'
import arrow from '../arrow.svg'
import { Link } from "react-router-dom";

function Home() {




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
                    x: -500,
                    y: 750
                }}
                animate={{
                    x: -400,
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
                    x: -10,
                    y: 750
                }}

                animate={{
                    x: -10,
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



            <div className="textContainer">
                <ul className="ulText">
                    <li style={{ fontSize: '50px' }}>Hello, My name is <b>Todd Carpenter</b>.</li>
                    <li style={{ fontSize: '50px' }}>I'm a full stack web developer.</li>
                    <li><Link to="/projects"><button align='center' className="btnHome">View my work <img style={{ verticalAlign: 'middle' }}
                        align="center" src={arrow} /> </button></Link></li>
                </ul>

            </div >
        </div>

    );
}



export default Home;