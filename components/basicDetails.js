import { useState } from "react";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";



const BasicDetails = ({ userData, setUserData, setModel }) => {
  const [details, setDetails] = useState({});
  return (
    <div>
      <div>
        <BsFill1CircleFill/>
        <p>Update your <b>rank</b></p>
        <input
          type="text"
          value={details.name}
          // placeholder="Eg John D oe"
          className="border-2 w-full p-2 rounded-sm border-gray-300 my-3"
          onChange={(e) => {
            setDetails({ ...details, name: e.target.value });
          }}
        />
      </div>

      <div>
        <BsFill2CircleFill/>
        <p>Update your <b>percentile</b></p>
        <input
          type="text"
          value={details.percentile}
          // placeholder="Eg john@gmail.com"
          className="border-2 w-full  p-2 rounded-sm border-gray-300 my-3"
          onChange={(e) => {
            setDetails({ ...details, percentile: e.target.value });
          }}
        />
      </div>


      <div>
      <BsFill3CircleFill/>
      <p>Update your <b>current score</b> (out of 15)</p>
      <input
        type="number" min="0" max="15"
        value={details.score}
        // placeholder="Eg 1234567890"
        className="border-2 w-full  p-2 rounded-sm border-gray-300 my-3"
        onChange={(e) => {
          setDetails({ ...details, score: e.target.value });
        }}
      />
      </div>
      <div className="w-full flex justify-end">
        <button
          className="bg-blue-500 p-1 px-4 border-none my-2 text-white rounded-md"
          onClick={() => {
            setUserData({ ...details });
            setModel(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default BasicDetails;
