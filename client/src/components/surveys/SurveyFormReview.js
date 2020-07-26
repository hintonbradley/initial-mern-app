// Shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    console.log("actions are ", actions.submitSurvey)
    const reviewFields = formFields.map(field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}

            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>

            <button onClick={ () => submitSurvey(formValues, history)} className="green btn-flat right">Send Survey</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state.form)
    return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));