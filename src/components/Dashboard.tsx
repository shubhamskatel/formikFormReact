import { useState } from "react";
import MainTable from "./Table";
import SignupForm from "./form";

const Dashboard = () => {
  const [userData, setuserData] = useState<any>([]);
  const [singleData, setSingleData] = useState<any>();
  const [editIndex, setEditIndex] = useState<any>();
  const [editStatus, setEditStatus] = useState<boolean>(false);

  // Function adds new user data to the state
  const setData = (data: any) => {
    setuserData([...userData, data]);
  };

  // Function sets single data to the state to be edited
  const setSingleDataFunction = (newData: any) => {
    const tempData = userData;
    tempData[editIndex] = newData;
    setuserData(tempData);
    setEditStatus(false);
    setSingleData(undefined);
  };

  // Function handles the delete button
  const deleteButton = (index: number) => {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setuserData(updatedUserData);
  };

  // Function handles the edit button
  const editButton = (index: number) => {
    setSingleData(userData[index]);
    setEditStatus(true);
    setEditIndex(index);
  };

  return (
    <>
      <SignupForm
        setData={setData}
        setSingleDataFunction={setSingleDataFunction}
        singleData={singleData}
        editStatus={editStatus}
      />
      <MainTable
        userData={userData}
        deleteButton={deleteButton}
        editButton={editButton}
      />
    </>
  );
};

export default Dashboard;
