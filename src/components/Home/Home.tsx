import { Link } from "react-router-dom";
import { HomeBookingButton } from "../styled/Buttons";
import { H1, H4, RestaurantSlogan } from "../styled/Headings";

export const Home = () => {
  return (
    <>
      <H1>Encanto</H1>
      <H4>Restaurant Reservation</H4>
      <RestaurantSlogan>
      Book table at your favorite restaurant
and get served instantly
      </RestaurantSlogan>
      <Link to="/booking">
        <HomeBookingButton>Book Now</HomeBookingButton>
      </Link>
    </>
  );
};
