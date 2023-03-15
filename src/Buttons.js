function Buttons ({filteredFlowers}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredFlowers('juhlakukat')}>Juhlakukat</button>
            <button className="change" onClick={() => filteredFlowers('suruun')}>Suruun</button>
            <button className="change" onClick={() => filteredFlowers('huonekasvit')}>Huonekasvit</button>
            <button className="change" onClick={() => filteredFlowers('lahjat')}>Lahjat</button>
            <button className="change" onClick={() => filteredFlowers('kortit')}>Kortit</button>
            <button className="change" onClick={() => filteredFlowers('puutarha')}>Puutarha</button>
        </div>
    )

}
export default Buttons;