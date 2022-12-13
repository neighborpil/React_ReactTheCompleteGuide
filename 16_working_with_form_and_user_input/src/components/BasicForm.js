import useCustomInput from "../hooks/use-custom-input";

const istNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName
    } = useCustomInput(istNotEmpty);

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useCustomInput(istNotEmpty);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
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

        if (!formIsValid) {
            return;
        }

        console.log('Submitted');
        console.log(`${enteredFirstName} ${enteredLastName} ${enteredEmail}`)

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

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
                    {firstNameHasError && <p className="error-text">First Name must not empty.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                           id='lastName'
                           onChange={lastNameChangeHandler}
                           onBlur={lastNameBlurHandler}
                           value={enteredLastName}/>
                    {lastNameHasError && <p className="error-text">Last name must not empty.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text'
                       id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                       value={enteredEmail}/>
                {emailHasError && <p className="error-text">Please enter valid email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
