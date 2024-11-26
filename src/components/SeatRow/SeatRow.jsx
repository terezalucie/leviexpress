import Seat from "../Seat/Seat"

const SeatRow = ({row, rowSelectedSeat}) => {

    return(
        <div className="seat-row">
            {row.map(seat => <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} isSelected={seat.number === rowSelectedSeat} />)}
        </div>
)}

export default SeatRow