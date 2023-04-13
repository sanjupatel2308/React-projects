function Student() {
    return <div className="container">
        <div className="row bg-danger mt-2">
            <div className="col-12 text-center p-2 text-white font-weight-bold">Student App</div>
        </div>
        <div className="row mt-4 mb-4">
            <div className="col-5">
                <input type="text" className="form-control" placeholder='Enter Roll Number' />
            </div>
            <div className="col-5">
                <input type="text" className="form-control" placeholder='Enter Name' />
            </div>
        </div>
        <div className="row mt-3 mb-2">
            <div className="col-5">
                <input type="text" className="form-control" placeholder='Enter Mobile Number' />
            </div>
            <div className="col-5">
                <select className="form-control">
                    <option value="0">Select Branch</option>
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="CV">CV</option>
                    <option value="EC">EC</option>
                </select>
            </div>
        </div>
        <div className='row'>
            <div className='col-2 mt-2 w-100'>
                <button className='btn btn-danger'>Add</button>
            </div>
        </div>
        <div className="text-right col-10" >
            <button className="btn btn-primary col-1 me-1">IT (0)</button>
            <button className="btn btn-primary col-1 me-1">IT (0)</button>
            <button className="btn btn-primary col-1 me-1">IT (0)</button>
            <button className="btn btn-primary col-1 me-1">IT (0)</button>
            <button className="btn btn-primary col-1 me-1">IT (0)</button>
        </div> 

    </div>

}

export default Student;