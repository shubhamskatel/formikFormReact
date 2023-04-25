import { useDispatch, useSelector } from "react-redux";
import { deleteData, getSingleUserData } from "../redux/reducers/userDataSlice";

const MainTable = () => {
  const totalData = useSelector((state: any) => state.totalData.userData);
  const dispatch = useDispatch();

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
                <button onClick={() => dispatch(getSingleUserData(index))}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(deleteData(index))}>
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
