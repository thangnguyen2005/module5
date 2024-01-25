import React from 'react';

class StudentInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: 'John Doe', age: 20, address: '123 ABC Street' },
                { id: 2, name: 'Jane Smith', age: 22, address: '456 XYZ Street' },
                // Thêm thông tin sinh viên khác (nếu cần)
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>Thông tin sinh viên</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {<tbody>
                            {this.state.students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.address}</td>
                                </tr>
                            ))}
                        </tbody>}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentInfoComponent;
