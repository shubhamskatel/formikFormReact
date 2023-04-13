
interface Props {
  userData: any;
  deleteButton: (index: any) => void;
  editButton: (index: any) => void;
}

const MainTable = ({ userData, deleteButton, editButton }: Props) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Edit Record</th>
            <th scope="col">Delete Record</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user: any, index: any) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.class}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>

              <td>
                <button onClick={() => editButton(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteButton(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
