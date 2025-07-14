import { Grid } from './components/Grid/Grid';
import './index.css'; 

const data = [
  { name: 'Alice', age: 30, status: 'Active' },
  { name: 'Bob', age: 25, status: 'Inactive' },
  { name: 'Charlie', age: 35, status: 'Active' },
  { name: 'David', age: 40, status: 'Inactive' },
  { name: 'Eve', age: 28, status: 'Active' }
];

function App() {
  return (
    <div className="min-h-screen p-10 text-black bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold">🚀 IronGrid - MVP</h1>
      <Grid
        data={data}
        columns={[
          { field: 'name', header: 'Name', sortable: true, filterable: true, filter: 'text' },
          { field: 'age', header: 'Age', sortable: true, filterable: true, filter: 'number' },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            filterable: true,
            filter: 'checkbox',
            options: ['Active', 'Inactive']
          }
        ]}
        sorting
        filtering
      />
    </div>
  );
}

export default App;
