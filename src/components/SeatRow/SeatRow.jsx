import Seat from "../Seat/Seat"

const SeatRow = ({row}) => (
    
        <div className="seat-row">
            {row.map(seat => <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} />)}
        </div>
)

export default SeatRow