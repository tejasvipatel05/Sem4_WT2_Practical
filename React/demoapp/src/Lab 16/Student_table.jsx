const Student = [
    {
        name: "Tejasvi Shekhat",
        email: "tejasvi@gmail.com",
        birthdate:"10-oct-2005",
        phoneno: 9546123687,
        image: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid",
        department: "CSE",
        spi: 8.2,
    },
    {
        name: "Sonal Sankhat",
        email: "sonal@gmail.com",
        birthdate:"11-dec-2003",
        phoneno: 3265197465,
        image: "https://img.freepik.com/free-photo/responsible-student_23-2147650755.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid",
        department: "CSE",
        spi: 6.0,
    },
    {
        name: "Khushboo Lo",
        email: "khushboo@gmail.com",
        birthdate:"14-sep-2005",
        phoneno: 2148795632,
        image: "https://img.freepik.com/free-photo/close-up-portrait-pretty-young-woman-isolated_273609-35589.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid",
        department: "CSE",
        spi: 7.9,
    },
    {
        name: "Payal Kava",
        email: "payal@gmail.com",
        birthdate:"7-sep-2005",
        phoneno: 8645123015,
        image: "https://img.freepik.com/free-photo/headshot-beautiful-woman-20s-with-european-appearance-standing-white-wall-smiling-sincerely-feminine-actress-denim-overalls-attending-casting-new-movie-happiness-concept_176420-11042.jpg?ga=GA1.1.1655663988.1738386578&semt=ais_hybrid",
        department: "CSE",
        spi: 9.5,
    }
]

function Student_table() {
    return (
        <div className="d-flex">
            {Student.map((Ele, index) => {
                return (
                    <div className="d-flex justify-content-center mx-4 mb-4">
                        <table className="table" style={{ 'width': '18rem' }}>
                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-center">{Ele.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" colSpan="2">
                                        <img src={Ele.image} alt={Ele.name} className="img-fluid" height={600} width={600} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{Ele.email}</td>
                                </tr>
                                <tr>
                                    <th>BirthDate</th>
                                    <td>{Ele.birthdate}</td>
                                </tr>
                                <tr>
                                    <th>Phone No.</th>
                                    <td>{Ele.phoneno}</td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td>{Ele.department}</td>
                                </tr>
                                <tr>
                                    <th>SPI</th>
                                    <td>{Ele.spi}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default Student_table;