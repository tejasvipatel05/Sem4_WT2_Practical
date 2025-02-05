const faculty = [
    {
        name: "Shruti Maniar",
        education: "ME, BE",
        exp: "8+ years",
        contact: 547896512,
        image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/336---28-04-2023-01-34-37.jpg",
        working_since: "Dec-2021"
    },
    {
        name: "Arjun Bala",
        education: "Ph.D, M.tech",
        exp: "14+ years",
        contact: 135649456,
        image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
        working_since: "Jul-2013"
    },
    {
        name: "Charmy Vora",
        education: "M.Tech",
        exp: "2+ years",
        contact: 9132654875,
        image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/455---07-09-2024-01-13-17.jpg",
        working_since: "Aug-2024"
    }
]

function faculty_table() {
    return (
        <div className="d-flex">
            {faculty.map((Ele, index) => {
                return (
                    // <div className="d-flex justify-content-center mx-4 mb-4">
                        <table className="table" style={{ 'width': '18rem' }}>
                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-center">{Ele.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" colSpan="2">
                                        <img src={Ele.image} alt={Ele.name} className="img-fluid" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Education</th>
                                    <td>{Ele.education}</td>
                                </tr>
                                <tr>
                                    <th>Working Since</th>
                                    <td>{Ele.working_since}</td>
                                </tr>
                                <tr>
                                    <th>Experience</th>
                                    <td>{Ele.exp}</td>
                                </tr>
                                <tr>
                                    <th>Contact</th>
                                    <td>{Ele.contact}</td>
                                </tr>
                            </tbody>
                        </table>
                    // </div>
                )
            })}
        </div>
    )
}


export default faculty_table;