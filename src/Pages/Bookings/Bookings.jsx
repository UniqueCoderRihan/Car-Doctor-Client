import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
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
    const handleRemove = id => {
        Swal.fire({
            title: 'Are you sure want to remove?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:'delete'
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
                const remaing = bookings.filter(booking=>booking._id !==id)
                setBookings(remaing)

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
            <h3 className='text-4xl text-center text-warning my-3'>Available booking {bookings.length}</h3>
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
                            handleRemove={handleRemove}
                        ></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Bookings;