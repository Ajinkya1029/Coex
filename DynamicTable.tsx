import React, { useState } from 'react';

interface TableData {
  id: number;
  mineName: string;
  deliveryTime: string;
}

const DynamicTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>([
    { id: 1, mineName: 'Mine A', deliveryTime: '2 days' },
    { id: 2, mineName: 'Mine B', deliveryTime: '3 days' },
    { id: 3, mineName: 'Mine C', deliveryTime: '1 day' },
  ]);

  // Function to handle accepting a request
  const handleAccept = (id: number) => {
    // Simulate updating the request status or removing it from the table
    const updatedData = data.map(item =>
      item.id === id ? { ...item, status: 'Accepted' } : item
    );
    setData(updatedData);
  };

  // Function to handle deleting a request
  const handleDelete = (id: number) => {
    // Simulate removing the request from the table
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Mine Name</th>
          <th>Delivery Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.mineName}</td>
            <td>{item.deliveryTime}</td>
            <td>
              <button onClick={() => handleAccept(item.id)}>Accept</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
