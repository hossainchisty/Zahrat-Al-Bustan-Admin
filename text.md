{/\_ <td className='px-6 py-4 whitespace-nowrap'>

<div className='text-sm text-gray-900'>
{order.isPaid ? (
<FontAwesomeIcon
                          icon={faCheck}
                          className='text-green-500'
                        />
) : (
<FontAwesomeIcon
                          icon={faTimes}
                          className='text-red-500'
                        />
)}
</div>
</td> _/}
{/_ <td className='px-6 py-4 whitespace-nowrap'>
<div className='text-sm text-gray-900'>
{order.transactionId}
<button
className='ml-2 text-indigo-500'
onClick={() => copyToClipboard(order.transactionId)} >
<FontAwesomeIcon icon={faClipboard} />
</button>
</div>
</td> _/}

                  {/* <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900'>
                      <select
                        value={updatedStatusMap[order._id] || order.status}
                        onChange={(e) => {
                          const selectedStatus = e.target.value;
                          if (
                            selectedStatus !== 'Delivered' &&
                            selectedStatus !== order.status
                          ) {
                            setUpdatedStatusMap({
                              ...updatedStatusMap,
                              [order._id]: selectedStatus,
                            });
                          }
                        }}
                        disabled={updatedStatusMap[order._id] === 'Delivered'}
                      >
                        <option value='Pending'>Pending</option>
                        <option value='Processing'>Processing</option>
                        <option value='Shipped'>Shipped</option>
                        <option value='Delivered'>Delivered</option>
                      </select>
                      {updatedStatusMap[order._id] !== 'Delivered' &&
                        updatedStatusMap[order._id] !== order.status && (
                          <button
                            className='ml-2 bg-blue-500 text-white px-1 py-1 rounded-lg'
                            onClick={() => updatereservationtatus(order._id)}
                          >
                            Update
                          </button>
                        )}
                    </div>
                  </td> */}

// const updatereservationtatus = (orderId) => {
// const newStatus = updatedStatusMap[orderId];
// console.log(newStatus);

// fetch(`${apiBaseDomain}/order/${orderId}/update-status`, {
// method: 'PATCH',
// headers: {
// Authorization: `Bearer ${token}`,
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify({ newStatus }),
// })
// .then((response) => response.json())
// .then(() => {
// toast.success('Order status updated successfully!');
// })
// .catch((error) => {
// console.error('Error updating order status:', error);

// // Show an error toast notification
// toast.error('Error updating order status.');
// });
// };
