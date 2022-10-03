import React, { useState } from 'react';

function CourseAdd() {
    const [coursename, setCourseName] = useState("");
    const [courseduration, setCourseDuration] = useState("");
    const [coursetiming, setCourseTiming] = useState("");
    const [coursedescription, setCourseDescription] = useState("");
    const [errMessage, setMessage] = useState("");

    async function postData() {
        let item = { coursename, courseduration, coursetiming, coursedescription };
        console.log(coursename + " " + courseduration + " " + coursetiming + " " + coursedescription);
        const f = await fetch("http://localhost:8080/addCourse/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
            .then((response) => {
                response.json();
                if (response.status === 200) {   
                    setCourseName('');  
                    setCourseDescription('');
                    setCourseDuration('');
                    setCourseTiming('');               
                    setMessage("Added Successfully...");
                }
                else {
                    setMessage("Pls try again");
                }
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
                            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='course'>All Courses</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-info rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='CourseAdd'>Add</a></div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='card shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '200px' }}>
                                <div className='text-center'><a style={{ textDecoration: 'none' }} href='CourseDelete'>Delete</a></div>
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
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded'>
                        <h3>Add Courses</h3>

                        <br /><br />

                        {errMessage && <><small style={{ color: 'green' }}>{errMessage}</small><br /></>}

                        <div style={{ marginTop: 10 }}>
                            Course Name<br />
                            <input type="text" className='form-control' value={coursename}  onChange={(e) => setCourseName(e.target.value)} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            Course Duration<br />
                            <input type="text" className='form-control' value={courseduration} onChange={(e) => setCourseDuration(e.target.value)} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            Course Timing<br />
                            <input type="text" className='form-control' value={coursetiming}  onChange={(e) => setCourseTiming(e.target.value)} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            Course Description<br />
                            <input type="text" className='form-control' value={coursedescription}  onChange={(e) => setCourseDescription(e.target.value)} />
                        </div>

                        <div style={{ marginTop: 30 }}>
                            <center><input type="button" className='btn btn-info' value='Add' onClick={postData} /></center><br />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default CourseAdd;