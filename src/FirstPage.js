import { dataFirstPage } from "./dataFirstPage";
import { useState } from "react";
import './App.css';

function FirstPage() {
    const [sale, setSale] = useState(0);
    const {id, imageName, image, description} = dataFirstPage[sale];
    const [showMore, setShowMore] = useState(false);

    const backSale = () => {
        setSale((sale =>{
            sale --;
            if(sale < 0) {
                return dataFirstPage.length - 1;
            }
            return sale;
        })) 
    }
    const nextSale = () => {
        setSale((sale => {
            sale ++;
            if (sale > dataFirstPage.length - 1) {
                sale = 0;
            }
            return sale;
        }))
    }

    

    return <div>
        <div>
            <img className="firstImg" src="https://lassilankukka.ekukka.fi/pictures/993_large.jpg" alt="flowers" width="100%"/>
        </div>
        <div className="container">
            <h1>Lassilan kukka</h1>
        </div>
        <div className="header">
        <div>
            <img className="imgShop" src="shop.jpg" alt="shop" width="600px"/>
        </div>
        <div className="headerShop">
            <p>Kukkakauppa sijaitsee Pohjes Haaga -aseman sisällä pohjakerroksessa.
            Erikoisosaamistamme ovat taidokkaat ja yksilölliset kukkasidonnat.
            Viherkasvit, maljakot, ruukut, käsintehtyjä lahjoja, kynttilöitä ja laadukkaat suklaat.
            Olemme kukkasidonnan lisäksi erikoistuneet mm. ruukkukasveihin, viherkasveihin, hienoihin erikoisruukkuihin sekä muihin sisustuksellisiin elementteihin.
            Anna kukkien puhua puolestasi! Toimitamme kukat ammattitaidolla koko pääkaupunkiseudulle.</p>
        </div>
        </div>
        <div className="container">
            <h4 className="sale">Meillä on tällä hetkellä tarjouksia seuraaville tuotteille.</h4>
        </div>
        <div className="container">
            <h2>{id} - {imageName}</h2>
        </div>
        <div className="container">
            <img src={image} width="300px" alt="flowers"/>
        </div>
        
        <div className="container">
            <p className="description">{showMore ? description : description.substring(0,30) + "...."} <button className="showMore" onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button></p>
        </div>
        <div className="btn container">
            <button className="btnBack" onClick={backSale}>Back</button>
            <button className="btnBack"  onClick={nextSale}>Next</button>
        </div>
        
        <div  className="container">
            
        </div>
        <div  className="payment">
            <h3 className="">Maksutavat</h3>
            <img className="" src="https://lassilankukka.ekukka.fi/images/Paytrail-banneri-kaikki-maksutavat.png" alt="payment" width="80%"/>
        </div>
        </div>
}

export default FirstPage;