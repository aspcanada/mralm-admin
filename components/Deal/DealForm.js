import React from "react";
import { Field, Form, Formik, ErrorMessage } from 'formik';

// Purpose: Debt consolidation
// Location: #104 - 2600 Peatt Road, Victoria, British Columbia, V9B6X9
// Value: $755,000 (Appraised)
// Position: 2nd mortgage
// LTV: 73%
// Amount: $130,000.00
// Term: 12 months interest only
// Rate: 11.95% $1,294.58/m
// Closing: Sept 01, 2021

const DealForm = ({ deal={} }) => {
  return (
    <>
      <div>
        <h2>Mortgage Details</h2>
        <p>Purpose: {deal.purpose}</p>
        <p>Location: {deal.location}</p>
        <p>Value: {deal.value}</p>
        <p>Position: {deal.position}</p>
        <p>LTV: {deal.ltv}</p>
        <p>Amount: {deal.amount}</p>
        <p>Term: {deal.term}</p>
        <p>Rate: {deal.rate}</p>
        <p>Closing: {deal.date}</p>
      </div>

      {/* <Formik initialValues={deal} onSubmit={onSubmit}>
          <Form>
            <Field name="purpose" /> */}

    </>
  );
};

export default DealForm;
