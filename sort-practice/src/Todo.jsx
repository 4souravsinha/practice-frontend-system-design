import {useDetails} from './todo_data'
import { dateSort , numberSort , wordSort } from './sort_strategy';
import { useState } from 'react';

const Todo = () => {

  const details = useDetails();
  console.log(details);
  const nameSort = wordSort(details);
  const ageSort = numberSort(details);
  const dobSort = dateSort(details);

  const [sort, setSort] = useState('name');

  const displayItem = sort === 'name' ? nameSort : sort === 'age' ? ageSort : dobSort;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => setSort('name')}>name</button>
          </th>
          <th>
            <button onClick={() => setSort('age')}>age</button>
          </th>
          <th>
            <button onClick={() => setSort('dob')}>dob</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {displayItem.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Todo
