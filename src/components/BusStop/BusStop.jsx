import "./BusStop.css"

const BusStop = ({name, station, time}) => {
    return(
        <div class="bus-stop">
            <div class="bus-stop__bullet"></div>
            <div class="bus-stop__place">
                <div class="bus-stop__city">{name}</div>
                <div class="bus-stop__station">{station}</div>
            </div>
            <div class="bus-stop__departure">{time}</div>
        </div>       
    )
}

export default BusStop