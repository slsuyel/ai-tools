import React, { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';

const GPACalculator = () => {
    const [subjects, setSubjects] = useState([{ name: '', marks: '', totalMarks: '', grade: '', gradePoints: '' }]);
    const [finalResult, setFinalResult] = useState(null);

    const calculateGrade = () => {
        const updatedSubjects = subjects.map((subject) => {
            const percentage = (subject.marks / subject.totalMarks) * 100;

            let grade, gradePoints;

            if (percentage >= 80) {
                grade = 'A+';
                gradePoints = 5.00;
            } else if (percentage >= 70) {
                grade = 'A';
                gradePoints = 4.00;
            } else if (percentage >= 60) {
                grade = 'A-';
                gradePoints = 3.50;
            } else if (percentage >= 50) {
                grade = 'B';
                gradePoints = 3.00;
            } else if (percentage >= 40) {
                grade = 'C';
                gradePoints = 2.00;
            } else if (percentage >= 33) {
                grade = 'D';
                gradePoints = 1.00;
            } else {
                grade = 'F';
                gradePoints = 0.00;
            }

            return { ...subject, grade, gradePoints };
        });

        setSubjects(updatedSubjects);

        // Calculate final result
        const totalGradePoints = updatedSubjects.reduce((total, subject) => total + subject.gradePoints, 0);
        const averageGradePoints = totalGradePoints / updatedSubjects.length;

        setFinalResult({ averageGradePoints });
    };

    const addSubject = () => {
        setSubjects([...subjects, { name: '', marks: '', totalMarks: '', grade: '', gradePoints: '' }]);
    };

    const removeSubject = (index) => {
        const updatedSubjects = [...subjects];
        updatedSubjects.splice(index, 1);
        setSubjects(updatedSubjects);
    };

    const resetAll = () => {
        setSubjects([{ name: '', marks: '', totalMarks: '', grade: '', gradePoints: '' }]);
        setFinalResult(null);
    };

    const handleInputChange = (index, field, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index][field] = value;
        setSubjects(updatedSubjects);
    };

    return (
        <div className="">


            <Breadcrumb title={'GPA-calculator'} description={'Your Best online Grade Calculator'} />


            <h1 className="text-center text-white mb-4">Grade Calculator</h1>
            {finalResult && (
                <div className="d-flex text-white gap-3">
                    <h1 className='mb-0 fs-4'><strong> GPA:</strong> {finalResult.averageGradePoints}</h1>
                </div>
            )}

            {subjects.map((subject, index) => (
                <div key={index} className="mb-3">
                    <div className="input-group mt-2">
                        <input
                            className="bg-danger-subtle border-0 text-center text-success"
                            style={{ width: '70px' }}
                            type="text"
                            disabled
                            placeholder={index + 1}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            value={subject.name}
                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Marks"
                            value={subject.marks}
                            onChange={(e) => handleInputChange(index, 'marks', e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Total Marks"
                            value={subject.totalMarks}
                            onChange={(e) => handleInputChange(index, 'totalMarks', e.target.value)}
                        />
                        <div className="bg-danger border">
                            <button
                                className="border-0 btn btn-danger rounded-0"
                                type="button"
                                onClick={() => removeSubject(index)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="row justify-content-center mt-3">
                <div className='d-inline w-50'>
                    <button className="submit-btn mx-auto" type="button" onClick={calculateGrade}>
                        <i className="fa-solid fa-circle-check me-1"> </i>  Calculate Grade
                    </button>
                </div>
                <div className="d-flex gap-3 justify-content-end w-50">

                    <div>
                        <button className="btn btn-success" onClick={addSubject}>
                            Add Subject
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-warning" type="button" onClick={resetAll}>
                            Reset All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GPACalculator;
