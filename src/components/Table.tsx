interface Props {
  totalData: any;
  dispatch: any;
}

const MainTable = ({ totalData, dispatch }: Props) => {
  console.log("UserData::::::::::::::: ", totalData);
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
          {totalData.map((user: any, index: any) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.class}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>

              <td>
                <button
                  onClick={() =>
                    dispatch({ type: "GETSINGLEUSERDATA", payload: index })
                  }
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => dispatch({ type: "DELETE", payload: index })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
