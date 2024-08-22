import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Loading.css'; // Assuming your CSS file is named Loading.css

const Loading = () => {
    useEffect(() => {
        const loading = document.querySelector('.loading');
        if (!loading) return;

        // Continuous jumping animation
        const jump = () => {
            gsap.to(loading, {
                keyframes: [
                    { '--skate-x': '-12px', duration: 0.3 },
                    { '--skate-x': '12px', duration: 0.5 },
                    { '--skate-x': '0px', duration: 0.5 }
                ],
                repeat: -1,
                yoyo: true
            });

            gsap.to(loading, {
                keyframes: [
                    { '--skate-y': '-32px', duration: 0.4, delay: 0.2 },
                    { '--skate-y': '0px', duration: 0.2 }
                ],
                repeat: -1,
                yoyo: true
            });

            gsap.to(loading, {
                keyframes: [
                    {
                        duration: 0.2,
                        delay: 0.2,
                        '--arm-front': '40deg',
                        '--arm-front-end': '-12deg',
                        '--arm-back': '172deg',
                        '--arm-back-end': '38deg',
                        '--leg-front': '-8deg',
                        '--leg-front-end': '102deg',
                        '--leg-back': '103deg',
                        '--leg-back-end': '-16deg',
                        '--board-r': '-40deg',
                        '--body-r': '7deg',
                        '--body-y': '-90%',
                        '--body-x': '-160%',
                    },
                    {
                        duration: 0.2,
                        '--arm-front': '24deg',
                        '--arm-front-end': '-48deg',
                        '--arm-back': '172deg',
                        '--arm-back-end': '15deg',
                        '--leg-front': '22deg',
                        '--leg-front-end': '55deg',
                        '--leg-back': '142deg',
                        '--leg-back-end': '-58deg',
                        '--board-r': '3deg',
                        '--body-r': '12deg',
                        '--body-y': '-56%',
                        '--body-x': '-60%',
                    },
                    {
                        duration: 0.2,
                        '--arm-front': '24deg',
                        '--arm-front-end': '-48deg',
                        '--arm-back': '164deg',
                        '--arm-back-end': '-36deg',
                        '--leg-front': '-4deg',
                        '--leg-front-end': '66deg',
                        '--leg-back': '111deg',
                        '--leg-back-end': '-36deg',
                        '--board-r': '0deg',
                        '--body-r': '34deg',
                        '--body-y': '-53%',
                        '--body-x': '-28%',
                    },
                    {
                        '--arm-front': '24deg',
                        '--arm-front-end': '-48deg',
                        '--arm-back': '164deg',
                        '--arm-back-end': '-50deg',
                        '--leg-front': '40deg',
                        '--leg-front-end': '30deg',
                        '--leg-back': '120deg',
                        '--leg-back-end': '-36deg',
                        '--board-r': '0deg',
                        '--body-r': '12deg',
                        '--body-y': '-65%',
                        '--body-x': '-85%',
                        duration: 0.4
                    }
                ],
                repeat: -1,
                yoyo: true
            });
        };

        // Start the continuous jumping animation
        jump();

        return () => {
            // Clean up animations on component unmount
            gsap.killTweensOf(loading);
        };
    }, []);

    return (
        <div className="loading">
            <div className="skate">
                <div className="body">
                    <div className="arm back"></div>
                    <div className="arm front"></div>
                    <div className="leg back"></div>
                    <div className="leg front"></div>
                </div>
                <div className="board">
                    <svg viewBox="0 0 34 8">
                        <path d="M0.897306 0.911767C1.22218 0.30263 1.97934 0.072188 2.58848 0.397061L2.91936 0.573532C3.75214 1.01768 4.68144 1.25 5.62525 1.25H28.3752C29.3191 1.25 30.2484 1.01768 31.0811 0.573532L31.412 0.397061C32.0212 0.072188 32.7783 0.30263 33.1032 0.911767C33.4281 1.5209 33.1976 2.27807 32.5885 2.60294L32.2576 2.77941C31.0627 3.41667 29.7294 3.75 28.3752 3.75H27.9692C28.5841 4.09118 29.0002 4.747 29.0002 5.5C29.0002 6.60457 28.1048 7.5 27.0002 7.5C25.8957 7.5 25.0002 6.60457 25.0002 5.5C25.0002 4.747 25.4164 4.09118 26.0312 3.75H7.96925C8.5841 4.09118 9.00025 4.747 9.00025 5.5C9.00025 6.60457 8.10482 7.5 7.00025 7.5C5.89568 7.5 5.00025 6.60457 5.00025 5.5C5.00025 4.747 5.41639 4.09118 6.03124 3.75H5.62525C4.27109 3.75 2.93774 3.41667 1.74289 2.77941L1.41201 2.60294C0.802874 2.27807 0.572432 1.5209 0.897306 0.911767Z" />
                    </svg>
                </div>
                <div className="line top"></div>
                <div className="line bottom"></div>
            </div>
        </div>
    );
};

export default Loading;
