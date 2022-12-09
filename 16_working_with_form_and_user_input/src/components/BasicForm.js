import useCustomInput from "../hooks/use-custom-input";

const istNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName
    } = useCustomInput(istNotEmpty);

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useCustomInput(istNotEmpty);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useCustomInput(isEmail);


    let formIsValid = false;
    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (!enteredFirstName) {
            return;
        }
        if (!enteredLastName) {
            return;
        }
        if (!enteredEmail) {
            return;
        }

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text'
                           id='firstName'
                           onChange={firstNameChangeHandler}
                           onBlur={firstNameBlurHandler}
                           value={enteredFirstName}/>
                    {firstNameInputHasError && <p className="error-text">First Name must not empty.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                           id='lastName'
                           onChange={lastNameChangeHandler}
                           onBlur={lastNameBlurHandler}
                           value={enteredLastName}/>
                    {lastNameInputHasError && <p className="error-text">Last name must not empty.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text'
                       id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                       value={enteredEmail}/>
                {emailInputHasError && <p className="error-text">Please enter valid email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
