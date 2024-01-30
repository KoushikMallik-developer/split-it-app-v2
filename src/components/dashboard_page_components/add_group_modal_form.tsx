import {
    MDBBtn, MDBCol, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle, MDBRow
} from "mdb-react-ui-kit";
import MultipleSelectChip from "./add_group_form_multiple_select.tsx";

const AddGroupModalForm = (props: any) => {
    return (
        <>
            <MDBModal tabIndex='-1' open={props.centredModal} setOpen={props.setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="fw-bolder">Add New Group</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={props.toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p>
                                <div className="px-4">
                                    <MDBRow className='g-0 align-items-center'>
                                        <MDBInput
                                            wrapperClass='col-auto'
                                            label='Group Name'
                                            type='text'
                                            id='formTextExample2'
                                            aria-describedby='textExample2'
                                        />
                                        <MDBCol size="auto mb-3">
                                          <span id='textExample2' className='form-text p-1'>
                                            Must be 4-20 characters long.
                                          </span>
                                        </MDBCol>

                                        <MultipleSelectChip/>

                                    </MDBRow>
                                </div>
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn color='dark' onClick={props.toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn color="success">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
export default AddGroupModalForm
