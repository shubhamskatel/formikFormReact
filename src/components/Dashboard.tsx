import { useReducer, useState } from "react";
import dataDB from "../data/data";
import MainTable from "./Table";
import SignupForm from "./form";

const Dashboard = () => {
  const [userData, setUserData] = useState<any>();
  const [editIndex, setEditIndex] = useState<any>();
  const [editStatus, setEditStatus] = useState<boolean>(false);

  const dataReducer = (data: any, action: any) => {
    switch (action.type) {
      case "ADD":
        return [...data, action.payload];

      case "DELETE":
        const updatedUserData = [...data];
        updatedUserData.splice(action.payload, 1);
        return updatedUserData;

      case "GETSINGLEUSERDATA":
        setEditStatus(true);
        setEditIndex(action.payload);
        setUserData(data[action.payload]);
        return data;

      case "SETSINGLEUSERDATA":
        const tempData = data;
        tempData[editIndex] = action.payload;
        setEditStatus(false);
        setUserData(null);
        return tempData;

      default:
        return data;
    }
  };

  const [totalData, dispatch] = useReducer(dataReducer, dataDB);

  return (
    <>
      <SignupForm
        dispatch={dispatch}
        userData={userData}
        editStatus={editStatus}
      />
      <MainTable totalData={totalData} dispatch={dispatch} />
    </>
  );
};

export default Dashboard;
