import {MDBBtn, MDBListGroup, MDBListGroupItem, MDBRow} from "mdb-react-ui-kit";

const FriendsMainContent = () => {
    return (
        <div>
            <h4 className="text-center mt-5 mb-3 shadow-5-strong p-2 fw-bolder">My Friends</h4>
            <MDBRow className="justify-content-center">

                <MDBListGroup light className='mb-4 p-2'>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                    <MDBListGroupItem noBorders
                                      className='d-flex justify-content-between align-items-center bg-transparent shadow-5-strong'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{width: '45px', height: '45px'}}
                                className='rounded-circle ms-3'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                        </div>
                        <MDBBtn size='sm' rounded color='danger' className="m-2">
                            Unfriend
                        </MDBBtn>
                    </MDBListGroupItem>
                </MDBListGroup>
            </MDBRow>
        </div>
    )
}
export default FriendsMainContent
