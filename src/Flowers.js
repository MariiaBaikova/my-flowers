function Flowers ({anyFlowers}) {
    return (
        <div className="products">
           
            {anyFlowers.map((element => {
                const {id, name, searchTerm,  price, image} = element;
                return (
                    <div className="product-card" key={id}>
                        <img src={image} width="350px" height="350px" alt="clothes"/>
                    <div className="product-info">
                       
                        <h3>{name}</h3>
                        <h4>Alk. {price} €</h4>
                    </div>    
                    </div>

                )

            }))}
        </div>
        
    )

}

export default Flowers;