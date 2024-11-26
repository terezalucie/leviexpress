import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import JourneyDetail from '../../components/JourneyDetail/JourneyDetail';
import SeatPicker from '../../components/SeatPicker/SeatPicker';

export const HomePage = () => {

const navigate = useNavigate()
const [journey, setJourney] = useState(null)
const [userSeat, setUserSeat] = useState(null)

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData)
    setUserSeat(journeyData.autoSeat)
  }

  const handleBuy = () => {

    const fetchPost = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create",
          seat: userSeat,
          journeyId: journey.journeyId,
        })
      })
      const data = await response.json()
      navigate(`/reservation/${data.results.reservationId}`);
    }
    fetchPost()
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null && 
      <>
        <JourneyDetail journey={journey} />
        <SeatPicker onSeatSelected={setUserSeat} selectedSeat={userSeat} seats={journey.seats} />   
        <div className="controls container">
          <button onClick={handleBuy} className="btn btn--big" type="button">Rezervovat</button>
        </div>
      </> }
    </main>
  );
};
