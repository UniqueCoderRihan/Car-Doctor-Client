import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
// import { AuthContex } from '../../Providers/AuthProvider';
const Bookings = () => {
    const { user } = useContext(AuthContex);
    const [bookings, setBookings] = useState([]);
    // console.log(user);

    useEffect(() => {
        const url = `http://localhost:5000/bookings?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <h3>Available booking {bookings.length}</h3>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Remove
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            bookingInfo={booking}
                        ></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Bookings;