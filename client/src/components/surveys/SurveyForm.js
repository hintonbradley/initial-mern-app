import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'

class SurveyForm extends Component {
    renderFields () {
        return (
            <div>
                <Field label="Survey title" type="text" name="title" component={SurveyField} />
                <Field label="Subject line" type="text" name="subject" component={SurveyField} />
                <Field label="Survey body" type="text" name="body" component={SurveyField} />
                <Field label="Recipient list" type="text" name="emails" component={SurveyField} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <h3>Survey Form</h3>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next</button>
                </form>
            </div>

        )
    }
}

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    if (!values.title) {
        errors.title = 'You must provide a title';
    }

    if (!values.subject) {
        errors.subject = 'You must provide a subject';
    }

    if (!values.body) {
        errors.body = 'You must provide a body';
    }

    if (!values.body) {
        errors.body = 'You must provide a body';
    }

    if (!values.emails) {
        errors.emails = 'You must provide email(s)';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);