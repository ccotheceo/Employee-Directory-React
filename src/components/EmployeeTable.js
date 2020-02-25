import React from 'react';
import MaterialTable from 'material-table';

export default function EmployeeTable() {
    const [state] = React.useState({
    columns: [
      { title: 'Id', field: 'id', type: 'numeric' },
      { title: 'First', field: 'firstName' },
      { title: 'Last', field: 'lastName' },
      { title: 'Cell', field: 'cell', type: 'numeric' },
      { title: 'Email', field: 'email'},
    ],
    data: [
      {
        id: '1',
        firstName: 'Chuck',
        lastName: 'Onyekwelu',
        cell: '7133762531',
        email: 'ccotheceo@gmail.com'
    },
    {
        id: '2',
        firstName: 'Chuck',
        lastName: 'Norris',
        cell: '7135555555',
        email: 'roundhouseman@example.com'
    },
    {
        id: '3',
        firstName: 'Chuck',
        lastName: 'Taylor',
        cell: '7138932441',
        email: 'conversewithme@example.com'
    },
    {
        id: '4',
        firstName: 'Walter',
        lastName: 'White',
        cell: '1938264828',
        email: 'brakingandbad@example.com'
    },
    {
        id: '5',
        firstName: 'Shaquille',
        lastName: 'Oneal',
        cell: '8362937519',
        email: 'shaqnosis@example.com'
    },
    {
        id: '6',
        firstName: 'Mike',
        lastName: 'Jones',
        cell: '2813308004',
        email: 'whomikejones@example.com'
    },
    {
        id: '8',
        firstName: 'Kawai',
        lastName: 'Leonard',
        cell: '5555555555',
        email: 'whatitdobaby98@example.com'
    },


    ],
  });

  return (
    <MaterialTable
      title="Here's A List Of Your Current Employees"
      columns={state.columns}
      data={state.data}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
          color: 'darkorange'
        }
      }}
    />
  );
}
