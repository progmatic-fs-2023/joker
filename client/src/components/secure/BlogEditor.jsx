import { Link } from "react-router-dom"

function BlogEditor () {
    return (
        <div>
            <h1>BlogEditor Page</h1>
            <br />
            <p>You must have been assigned an ADMIN role at least!</p>
            <div className="flexGrow">
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    )
}

export default BlogEditor
