import {MDBBtn, MDBListGroup, MDBListGroupItem, MDBRow} from "mdb-react-ui-kit";

const GroupsMainContent = (props: any) => {
    return (
        <div>
            <h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">My Groups</h4>
            <MDBRow className="justify-content-center">
                <MDBBtn outline rounded color='success' className="my-4 shadow-5-strong" style={{maxWidth: "200px"}} onClick={props.toggleOpen}>
                    Add Group
                </MDBBtn>
                <MDBListGroup light className='mb-4 p-2'>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Varanasi Ride</p>
                                <p className='text-muted mb-0 small'>Last Updated: 8 days ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/11.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Apartment</p>
                                <p className='text-muted small mb-0'>Last Updated: 5 minutes ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Manali Trip</p>
                                <p className='text-muted mb-0 small'>Last Updated: 9 months ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Manali Trip</p>
                                <p className='text-muted mb-0 small'>Last Updated: 9 months ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Manali Trip</p>
                                <p className='text-muted mb-0 small'>Last Updated: 9 months ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>Manali Trip</p>
                                <p className='text-muted mb-0 small'>Last Updated: 9 months ago</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Delete
                        </MDBBtn>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBRow>
        </div>

    )
}
export default GroupsMainContent
