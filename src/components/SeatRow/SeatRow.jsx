import Seat from "../Seat/Seat"

const SeatRow = ({row, rowSelectedSeat, onSeatSelected}) => {

    return(
        <div className="seat-row">
            {row.map(seat => <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} isSelected={seat.number === rowSelectedSeat} onSelect={onSeatSelected} />)}
        </div>
)}

export default SeatRow