import React, { useEffect, useState } from 'react';



function Course(props) {

    const [allcourses, setAllCourses] = useState("");
    const [data, getData] = useState([]);
    const courseList = []

    useEffect(() => {
        getCourses();
    })

    function coList(props) {
        return <li>{props.coursename}</li>
    }

    function getCourses() {
        fetch("http://localhost:8080/getCourses")
            .then((response) => response.json())
            .then((ans) => {
                //console.log(ans);
                getData(ans);
            })

    }

    return (
        <div>

            <div className='row'>
                <div className='col-sm-12'>
                    <div className='card shadow-lg p-3 mb-5 bg-primary rounded border border-info'>
                        <h1 style={{ 'textAlign': 'center', color: 'white' }}> Course </h1>
                    </div>
                </div>
            </div>


            <div className='row mx-auto'>
                <div className='col-sm-3'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-info rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href=''>All Courses</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='courseadd'>Add</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='coursedelete'>Delete</a></div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='login1'>Logout</a></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-sm-9'>
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded text-center'>
                        <table className='table table-hover'>
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Timing</th>
                                    <th>Description</th>
                                </tr>
                                {data.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.coursename}</td>
                                        <td>{item.courseduration}</td>
                                        <td>{item.coursetiming}</td>
                                        <td>{item.coursedescription}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Course;