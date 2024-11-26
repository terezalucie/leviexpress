import Seat from "../Seat/Seat"
import "./SeatPicker.css"

const SeatPicker = () => {
    return(
            <div class="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div class="seats">
        <Seat number="1" />
        <Seat number="17" />
        <Seat number="33" />
      </div>
    </div>
    )
}

export default SeatPicker