// import React, { useState } from 'react';
// import './profile.css'; // Import CSS file
// import { IoIosAdd } from "react-icons/io";
// import { RiEdit2Line } from "react-icons/ri"; // Changed CiEdit to RiEdit2Line

// import coverImage from './asserts/back.png';
// import profImage from './asserts/bg.png';

// export default function TimeLine() {
//     const [showOptions, setShowOptions] = useState(false);
//     const [educations, setEducations] = useState([
//       // Default template experience
//       {
//         role: 'Default Role',
//         companyName: 'Default Company',
//         employmentType: 'Full Time',
//         startDate: 'January 2020',
//         endDate: 'Present',
//         location: 'Default Location'
//       }
//     ]);
  
//     const [editingIndex, setEditingIndex] = useState(-1); 
//     const [editedEducation, setEditedEducation] = useState({});
  
//     const toggleOptions = () => {
//       setShowOptions(!showOptions);
//     };
  
//     const handleAddEducation = () => {
//       // Duplicate the default template and add it as a new experience
//       setEducations(prevEducations => [...prevEducations, { ...{
//         role: 'Default Role',
//         companyName: 'Default Company',
//         employmentType: 'Full Time',
//         startDate: 'January 2020',
//         endDate: 'Present',
//         location: 'Default Location'
//       } }]);
//     };
  
//     const handleEditEducation = (index) => {
//       setEditingIndex(index);
//       setEditedEducation({ ...educations[index] });
//     };
  
//     const handleSaveEducation = () => {
//       setEducations(prevEducations => {
//         const updatedEducations = [...prevEducations];
//         updatedEducations[editingIndex] = editedEducation;
//         return updatedEducations;
//       });
//       setEditingIndex(-1);
//       setEditedEducation({});
//     };

//     return(
//         <div className="education">
//           <h3>Education</h3>
//           <div className="icons">
//             <h3><IoIosAdd onClick={handleAddEducation} /></h3>
//           </div>

//           {educations.map((education, index) => ( // Changed 'education' to 'educations'
//             <div key={index} className='info'>
//               {editingIndex === index ? (
//                 <div className='someInput'>
//                   <input type="text" value={editedEducation.role} onChange={(e) => setEditedEducation({ ...editedEducation, role: e.target.value })} />
//                   <input type="text" value={editedEducation.companyName} onChange={(e) => setEditedEducation({ ...editedEducation, companyName: e.target.value })} />
//                   <input type="text" value={editedEducation.startDate} onChange={(e) => setEditedEducation({ ...editedEducation, startDate: e.target.value })} />
//                   <input type="text" value={editedEducation.endDate} onChange={(e) => setEditedEducation({ ...editedEducation, endDate: e.target.value })} />
//                   <input type="text" value={editedEducation.location} onChange={(e) => setEditedEducation({ ...editedEducation, location: e.target.value })} />
//                   <button onClick={handleSaveEducation} className='someButton'>Save</button>
//                 </div>
//               ) : (
//                 <div className='someView'>
//                   <h3>{education.role}</h3>
//                   <h4>{education.companyName} - {education.employmentType}</h4>
//                   <p>{education.startDate} - {education.endDate}</p>
//                   <p>{education.location}</p>
//                   <h3><RiEdit2Line onClick={() => handleEditEducation(index)} /></h3> {/* Changed CiEdit to RiEdit2Line */}
//                 </div>
//               )}
//             </div>
//           ))}
//           <div className="divider2"></div>
//         </div>
//     )
// }
