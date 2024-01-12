import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Layouts from '../../Layouts/Layouts';
import axios from 'axios';

function Projectdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://online-pms-backend.onrender.com/projects/allProjects');
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log("Error while fetching data");
      }
    };
    getData();
  }, []);

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
            {data.guide && data.guide.map((project, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-left">{index + 1}</td>
                <td className="py-2 px-4 border-b text-left">{project.ProjectID}</td>
                <td className="py-2 px-4 border-b text-left">{project.GuideID}</td>
                <td className="py-2 px-4 border-b text-left">{project.Name}</td>
                <td className="py-2 px-4 border-b text-left">{project.ReviewerID}</td>
                <td className="py-2 px-4 border-b text-left">{project.Name}</td>
                <td className="py-2 px-4 border-b text-left">
                  <Link
                    to={`/projects/myprojects`}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md"
                  >
                    Show
                  </Link>
                </td>
              </tr>
            ))}

            {data.reveiwer && data.reveiwer.map((project, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-left">{index + 1}</td>
                <td className="py-2 px-4 border-b text-left">{project.ProjectID}</td>
                <td className="py-2 px-4 border-b text-left">{project.GuideID}</td>
                <td className="py-2 px-4 border-b text-left">{project.Name}</td>
                <td className="py-2 px-4 border-b text-left">{project.ReviewerID}</td>
                <td className="py-2 px-4 border-b text-left">{project.Name}</td>
                <td className="py-2 px-4 border-b text-left">
                  <Link
                    to={`/projects/myprojects`}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md"
                  >
                    Show
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layouts>
  );
}

export default Projectdata;

