import React from "react"
import { Field, Form, Formik } from "formik"
import Dropzone from "react-dropzone-uploader"
import { Button, Col, Label, Row } from "reactstrap"
import * as Yup from "yup"
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation"

const EditDealForm = ({ deal = {} }) => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" }
  }
  return (
    <Formik
      initialValues={{
        title: deal.title,
        purpose: deal.purpose,
        amount: deal.amount,
        position: deal.position,
        term: deal.term,
        ltv: deal.ltv,
        rate: deal.rate,
        details: deal.details,
        address: deal.address,
        city: deal.city,
        province: deal.province,
        postalCode: deal.postalCode,
        checkBoxes: [],
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(),
        purpose: Yup.string().required(),
        amount: Yup.number().required(),
        position: Yup.string().required(),
        term: Yup.string().required(),
        ltv: Yup.number().required(),
        rate: Yup.string().required(),
        details: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        postalCode: Yup.string().min(6).max(6).required(),
      })}
      onSubmit={(values) => {
        alert("Your data is submitted check console")
      }}
      render={() => (
        <Form>
          <Row className="gx-3">
            <Col sm="12" className="form-group">
              <Field
                label="Title"
                name="title"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                // placeholder="villa"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Purpose"
                name="purpose"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                // placeholder="villa"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Mortgage Amount"
                name="amount"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                // placeholder="$100,000"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Mortgage Position"
                name="position"
                className="form-control"
                component={ReactstrapSelect}
                inputprops={{
                  options: ["1st", "2nd", "3rd"],
                  // defaultOption: "2nd",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Term"
                name="term"
                className="form-control"
                component={ReactstrapSelect}
                inputprops={{
                  options: ["6 months", "1 year", "2 years"],
                  // defaultOption: "2nd",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Loan to Value"
                name="ltv"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                // placeholder="$100,000"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                label="Mortgage Rate"
                name="rate"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                // placeholder="$100,000"
              />
            </Col>
            <hr />
            <Col sm="12" className="form-group">
              <Field
                label="Details"
                name="details"
                type="textarea"
                className="form-control"
                component={ReactstrapInput}
                rows={4}
              />
            </Col>
          </Row>
          <div className="form-inputs">
            <Row className=" gx-3">
              <Col sm="4" className="form-group">
                <Field
                  label="Address"
                  name="address"
                  type="text"
                  className="form-control"
                  component={ReactstrapInput}
                  // placeholder="Address of your property"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  label="City"
                  name="city"
                  type="text"
                  className="form-control"
                  component={ReactstrapInput}
                  // placeholder="villa"
                />
              </Col>
              <Col sm="2" className="form-group">
                <Field
                  label="Province"
                  name="province"
                  type="text"
                  className="form-control"
                  component={ReactstrapInput}
                  // placeholder="villa"
                />
              </Col>
              <Col sm="2" className="form-group">
                <Field
                  label="Postal Code"
                  name="postalCode"
                  type="text"
                  className="form-control"
                  component={ReactstrapInput}
                  // placeholder="39702"
                />
              </Col>
            </Row>
          </div>
          <div className="dropzone-admin form-inputs">
            <label>Documents</label>
            <div className="dropzone" id="multiFileUpload">
              <div className="dz-message needsclick">
                <i className="fas fa-cloud-upload-alt" />
                <Dropzone
                  getUploadParams={getUploadParams}
                  maxFiles={1}
                  multiple={false}
                  canCancel={false}
                  inputContent="Drop A File"
                  accept="image/*,audio/*,video/*"
                  styles={{
                    dropzoneActive: { borderColor: "green" },
                  }}
                />
                <h6>Drop files here or click to upload.</h6>
              </div>
            </div>
            <Row className="gx-3">
              {/* <Col sm="12" className="form-group mb-0">
                <label>Additional features</label>
                <div className="additional-checkbox">
                  <Label htmlFor="chk-ani">
                    <Field
                      name="checkBoxes"
                      value="Emergency Exit"
                      className="checkbox_animated"
                      id="chk-ani"
                      type="checkbox"
                    />{" "}
                    Emergency Exit
                  </Label>
                  <Label htmlFor="chk-ani1">
                    <Field
                      name="checkBoxes"
                      value="CCTV"
                      className="checkbox_animated"
                      id="chk-ani1"
                      type="checkbox"
                    />{" "}
                    CCTV
                  </Label>
                  <Label htmlFor="chk-ani2">
                    <Field
                      name="checkBoxes"
                      value="Free Wi-Fi"
                      className="checkbox_animated"
                      id="chk-ani2"
                      type="checkbox"
                    />{" "}
                    Free Wi-Fi
                  </Label>
                  <Label htmlFor="chk-ani3">
                    <Field
                      name="checkBoxes In The Area"
                      value="Free Parking In The Area"
                      className="checkbox_animated"
                      id="chk-ani3"
                      type="checkbox"
                    />{" "}
                    Free Parking In The Area
                  </Label>
                  <Label htmlFor="chk-ani4">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani4"
                      type="checkbox"
                    />{" "}
                    Air Conditioning
                  </Label>
                  <Label htmlFor="chk-ani5">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani5"
                      type="checkbox"
                    />{" "}
                    Security Guard
                  </Label>
                  <Label htmlFor="chk-ani6">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani6"
                      type="checkbox"
                    />{" "}
                    Terrance
                  </Label>
                  <Label htmlFor="chk-ani7">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani7"
                      type="checkbox"
                    />{" "}
                    Laundry Service
                  </Label>
                  <Label htmlFor="chk-ani8">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani8"
                      type="checkbox"
                    />{" "}
                    Elevator Lift
                  </Label>
                  <Label htmlFor="chk-ani9">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani9"
                      type="checkbox"
                    />{" "}
                    Balcony
                  </Label>
                </div>
              </Col> */}
              <Col sm="12" className="form-btn">
                <Button type="submit" className="btn btn-gradient btn-pill">
                  Submit
                </Button>
                <Button type="submit" className="btn btn-dashed btn-pill">
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      )}
    />
  )
}

export default EditDealForm
