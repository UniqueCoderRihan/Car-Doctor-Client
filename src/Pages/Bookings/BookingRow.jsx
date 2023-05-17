

const BookingRow = ({ bookingInfo,handleRemove }) => {
    // console.log(bookingInfo);
    const { service, _id, image, customerName, customerEmail, details, amount } = bookingInfo;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleRemove(_id)} className="btn btn-circle btn-outline btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>

            <td>{amount}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Details</button>
            </th>
        </tr>

    );
};

export default BookingRow;