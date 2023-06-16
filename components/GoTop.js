'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function GoTop() {
    const [isVisible, setIsVisible] = useState(false);

    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };

    const listenToScroll = () => {
        let heightToHidden = 250;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);

        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="text-end pe-5 position-fixed bottom-50 end-0 z-3" onClick={goTop}>
                    <button>
                        <FontAwesomeIcon icon={faArrowCircleUp} width={40} height={40} />
                    </button>
                </div>
            )}
        </>
    )
}