import { useState } from "react"

import tenis1Amp from "../assets/tenis-1-ampliado.png"
import tenis2Amp from "../assets/tenis-2-ampliado.png"
import tenis3Amp from "../assets/tenis-3-ampliado.png"
import tenis1Ga from "../assets/tenis-1-galeria.png"
import tenis2Ga from "../assets/tenis-2-galeria.png"
import tenis3Ga from "../assets/tenis-3-galeria.png"


const Item = () => {
    const [currentImg, setCurrentImg] = useState<string>(tenis1Amp)

    function handleAmpSelectedImg(event: any) {
        const listId = event.currentTarget.getAttribute("id")
        const allListEl = document.querySelectorAll("#shoes-gallery li")

        switch(listId) {
            case "1":
                setCurrentImg(tenis2Amp)
                break 
            case "2":
                setCurrentImg(tenis1Amp)
                break
            case "3":
                setCurrentImg(tenis3Amp)
                break
        }

        allListEl.forEach(liEl => {
            if (liEl.getAttribute("id") === listId) {
                liEl.classList.add("border-solid")
                liEl.classList.add("border-b-4")
                liEl.classList.add("border-red-600")
            } else {
                liEl.classList.remove("border-solid")
                liEl.classList.remove("border-b-4")
                liEl.classList.remove("border-red-600")
            }
        })

    }

    return (
        <>
        <img src={currentImg} alt="An amplified shoes image" width={440} height={299.84} id="amp-image"/>
        <ul className="list-none flex flex-row justify-around w-full" id="shoes-gallery">
            <li onClick={handleAmpSelectedImg} id="1"><img src={tenis1Ga} alt="Shoes side by side" width={128} /></li>
            <li onClick={handleAmpSelectedImg} id="2" className="border-solid border-b-4 border-red-600"><img src={tenis2Ga} alt="One shoe upside-down and the other on top of it" width={128} /></li>
            <li onClick={handleAmpSelectedImg} id="3"><img src={tenis3Ga} alt="Shoe sole zoomed" width={128} /></li>
        </ul>
        </>
    )
}

export default Item