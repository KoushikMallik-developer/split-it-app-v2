import {MDBBtn, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";

const GroupList = () => {
    return (
        <div>
            <h6 className='bg-transparent p-2 shadow-5-strong text-center fw-bolder'>My Groups</h6>

            <MDBListGroup light className='mb-4 shadow-5-strong'>
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
                    <MDBBtn size='sm' rounded color='link'>
                        View
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
                    <MDBBtn size='sm' rounded color='link'>
                        View
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
                    <MDBBtn size='sm' rounded color='link'>
                        View
                    </MDBBtn>
                </MDBListGroupItem>
            </MDBListGroup>
        </div>
    )
}
export default GroupList
