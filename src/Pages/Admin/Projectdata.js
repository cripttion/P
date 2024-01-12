import React, { useState, useEffect } from 'react';
import { Link,Navigate, useNavigate } from 'react-router-dom';
import Layouts from '../../Layouts/Layouts';
import axios from 'axios';

function Projectdata() {
  const [data, setData] = useState([]);
  const [guide, setGuideData] = useState([]);
  const [reviewer, setReviewerData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://online-pms-backend.onrender.com/projects/allProjects');
        if (response) {
          setData(response.data);
          setGuideData(response.data.guide || []);
          setReviewerData(response.data.reveiwer || []);
        }
      } catch (error) {
        console.log("Error while fetching data");
      }
    };
    getData();
  }, []);

  // console.log("The vlue",reviewer);

  const findReviewerById = (reviewerId) => {

    return reviewer[reviewerId];
  };
  const handleShowClick = (pID)=>{
    console.log(pID);
     navigate('/projects/myProject',{state : {ProjectId:pID,xtemp:'pData'}})
  }

  return (
    <Layouts>
      <div className="container mx-auto px-4 mt-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">SN</th>
              <th className="py-2 px-4 border-b text-left">ProjectID</th>
              <th className="py-2 px-4 border-b text-left">GuideID</th>
              <th className="py-2 px-4 border-b text-left">GuideName</th>
              <th className="py-2 px-4 border-b text-left">ReviewerID</th>
              <th className="py-2 px-4 border-b text-left">ReviewerName</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {guide.map((guideProject, index) => {
              const reviewerProject = findReviewerById(index);
              // console.log(guideProject.ReviewerID)
              // console.log("The value of",reviewerProject);
              return (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-left">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-left">{guideProject.ProjectID}</td>
                  <td className="py-2 px-4 border-b text-left">{guideProject.GuideID}</td>
                  <td className="py-2 px-4 border-b text-left">{guideProject.Name}</td>
                  <td className="py-2 px-4 border-b text-left">{guideProject.ReviewerID}</td>
                  <td className="py-2 px-4 border-b text-left">{reviewerProject.Name || 'N/A'}</td>
                  <td className="py-2 px-4 border-b text-left">
                    <button onClick={()=>handleShowClick(guideProject.ProjectID)}
                     
                      className="bg-blue-500 text-white py-1 px-2 rounded-md"
                    >
                      Show
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layouts>
  );
}

export default Projectdata;
