"use client";
import React from 'react';

import "tailwindcss/tailwind.css";
import { LineChar } from "@/components/lineChar";
import "../app/globals.css";
import data from "../data/data.jsx";
import data1 from "../data/data1.jsx"
import { FaRegBell } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";


// import CorrectIcon from "../images/correct_ans.svg"
// import { ReactComponent as CorrectIcon} from "../images/correct_ans.svg";

// import { ReactComponent as YourSvg } from '../images/cuvette_logo.svg';
import Profile from './imgs/profile.png'


import {
  Line,
  LineChart,
  // BarChart,
  // Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
// import chartData from "../data/data.jsx";
import PieData from "@/data/pieData.jsx";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { useState } from "react";
import Model from "@/components/model";
import Cuvette from './imgs/cuvette_logo.png'

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
  // Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import {faker} from '@faker-js/faker'
import Image from 'next/image';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
  // Legend 
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right"
    },
    title: {
      display: false,
      text: "Subject Wise Analysis"
    }
  }
};

const labels = [
  "HTML Tools, Forms",
  "Tags in HTML",
  "Tabes and CSS basics",
  "Tables and CSS basics"
];

export const data2 = {
  labels,
  datasets: [
    {
      label: "Dataset",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 110 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }
  ]
};












const headerStyle = {
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const logoStyle = {
  flex: 1,
};

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
};

const profileImageStyle = {
  width: '40px', // Adjust the size as needed
  height: '40px', // Adjust the size as needed
  borderRadius: '50%',
  marginRight: '10px',
};

const usernameStyle = {
  fontWeight: 'bold',
};
















const Dashboards = () => {
  // const router = useRouter();
  // const { data: session, status } = useSession();
  const [model, setModel] = useState(false);
  const [userData, setUserData] = useState(null);
  const COLORS = ["#EE8484", "#F6DC7D", "#98D89E"];
  // console.log(session);
  return (





<>
    <header style={headerStyle}>
    <div style={logoStyle}>

      <Image src={Cuvette}></Image>

    </div>
    <div style={profileStyle}>
      
      <Image src={Profile}></Image>

    </div>
  </header>



















    <div className="h-screen w-screen color-primary-white p-5 flex flex-row">
      <div className="bg-primary h-full w-1/5 rounded-lg mr-3 p-10 flex flex-col text-black">
        {/* <p className="my-5 text-4xl">Board.</p> */}
        {/* <div className="flex-1"> */}
        <div className="text-lg mb-2 flex items-center">
          <RxDashboard style={{ marginRight: "15px" }} />
          Dashboard
        </div>
        <div className="text-lg mb-2 flex items-center ">
          <BsFillTagsFill style={{ marginRight: "15px" }} />
          Skill Test
        </div>
        <div className="text-lg mb-2 flex items-center">
          <BsCalendar2DateFill
            style={{ marginRight: "15px" }}
            fill="black"
            stroke="black"
            color="black"
          />
          Internship
        </div>
      </div>
      {/* </div> */}






    {/* <div className='flex-row'></div>*/}








      <div className="flex-1 rounded-lg p-6 flex flex-col bg-white">
        {/* <div className="flex"> */}
          <div className="flex-1 text-black font-bold" >Skill test</div>
        {/* </div> */}
        {/* //below code is under first div */}
        <div className="bg-gray-200 w-1/2 flex-1 flex ml-2 rounded-lg text-black flex-col p-5">
          <div className="w-full flex justify-center items-center">

            <button
              className="font-semibold my-4 text-sm text-gray-500"
              onClick={() => {
                setModel(!model);
              }}
            >
              Update
            </button>

            {model && (
              <Model
                model={model}
                setModel={setModel}
                userData={userData}
                setUserData={setUserData}
              />
            )}
          </div>

        </div>

        <div className="flex-1  text-black font-bold">Quick Statistics</div>
          <div className="flex flex-row w-1/2">
          
          {userData ? (
            <>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="">
                  <BsCashCoin size={"2em"} color="#7FCD93" />
                </div>
                <div>Your Rank</div>
                {/* <div className="font-bold">12,890 */}
                <div className="font-bold">
                  {userData?.name}
                </div>

              </div>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="flex-1 w-full flex pr-5">
                  <BsFillTagsFill size={"2em"} color={"#DEBF85"} />
                </div>
                <div>Percentile </div>
                <div className="font-bold">
                  {userData?.percentile}
                </div>
              </div>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="flex-1 w-full flex pr-5">
                  <BsFillTagsFill size={"2em"} color={"#DEBF85"} />
                
                </div>
                <div>Correct Answers</div>
                <div className="font-bold">{userData?.score}</div>
              </div>
              {/* </div> */}
            </>
          ) : (
            <>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="">
                  <BsCashCoin size={"2em"} color="#7FCD93" />
                </div>
                <div>Your Rank</div>
                <div className="font-bold">12,890</div>
              </div>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="flex-1 w-full flex pr-5">
                  <BsFillTagsFill size={"2em"} color={"#DEBF85"} />
                </div>
                <div>Percentile </div>
                <div className="font-bold">37%</div>
              </div>
              <div className=" text-black flex-1 my-3 mr-6 flex-col p-3 rounded-lg">
                <div className="flex-1 w-full flex pr-5">
                  <BsFillTagsFill size={"2em"} color={"#DEBF85"} />
                </div>
                <div>Correct Answers</div>
                <div className="font-bold">07/15</div>
              </div>
            </>
          )}
        </div>
   
        <div className='w-1/2 flex-col'>

          <div
            className="w-full h-5/6 bg-white rounded-lg my-2"
            style={{ position: "relative" }}
          >
            <div className=''>
              <p className='font-bold text-lg flex-1 text-black'>Comparison Graph</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="Percentile" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>










      <div className=" flex-1 rounded-lg p-6 flex flex-col bg-white">
       
        <div className="w-1/2 h-2/3 flex flex-col ">
        <div className="flex-1 text-black text-lg font-bold">Subject Wise Analysis</div>
        <div
            className="w-full h-4/5 bg-white rounded-lg my-2"
            style={{ position: "relative" }}
          >

            <ResponsiveContainer>
              <Bar options={options} data={data2} />
            </ResponsiveContainer>

          </div>
        </div>




          {/* <div className=''> */}
            <div className='w-full  flex-1 flex-col'>
              <p className="font-bold text-black text-lg ml-3">Question Analysis</p>
            </div>
            <div className=" bg-white-700 p-3 rounded-lg rounded-e-none h-1/2 flex-col text-black">
               <p>You scored 7 question correct out of 15. However it stilll needs some impovements</p>
              <ResponsiveContainer height="100%">
                <PieChart width={350} height={350}>
                  <Pie

                    data={PieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={75}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        styles={{ borderRadius: "20px !important" }}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
       {/* </div> */}
    {/* </div> */}

    </>
      );
};
      export default Dashboards;
