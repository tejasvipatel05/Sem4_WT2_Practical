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

function Faculty() {
    return (
        <div className="d-flex">
            {faculty.map((Ele, index) => {
                return (
                    <div className="d-flex justify-content-center mx-4 mb-4">
                        <div className="card" style={{ 'width': '18rem' }}>
                            <img src={Ele.image} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{Ele.name}</h5>
                                <div className="d-flex">
                                    <p className="card-text ms-3 me-5">{Ele.education}</p>
                                    <p className="card-text ms-5 me-3">{Ele.working_since}</p>
                                </div>
                                <p className="card-text">{Ele.exp}</p>
                                <a className="card-text">{Ele.contact}</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Faculty;