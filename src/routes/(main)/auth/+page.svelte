<script>
    import { userNumber, userName, avatar, passwordSet, password, passwordConfirm, userEmail } from '../../../lib/store'
    import { fade } from 'svelte/transition'
    import { imask } from 'svelte-imask';
    import { pocketbase, currentUser } from '../../../lib/pocketbase';
    // import { PUBLIC_POCKETBASE_URL, PUBLIC_REGISTER_USER_URL } from '$env/static/public';


    let showSignIn = true
    let showSignUp = false
    let showPasswordReset = false
    let registerPageOne = true
    let showPassword = false
    let showPasswordConfirm = false
    let successModalState = false
    let successSignInModalState = false
    let successfulPasswordResetModalState = false
    let failureSignInModalState = false
    let failureModalState = false

    let avatarInput, nameInput, phoneInput, signUpPhoneInput, emailInput, passwordInput, passwordInputWrapper, passwordConfirmInput, passwordInputConfirmWrapper, successModal, successSignInModal, signInForm, successPasswordResetModal, submitting_sign_in, submitting_sign_up, submitting_password_reset, regPasswordInputWrapper, regPasswordInput;

    const authState = window.localStorage.getItem('isAuthUser') || '0'

    // Registration functions
    const handleSignUp = async () => {

        submitting_sign_up = true

        var newUserBody = {
                        "username": $userNumber,
                        "email": $userEmail,
                        "avatar": $avatar,
                        "emailVisibility": true,
                        "password": $password,
                        "passwordConfirm": $password,
                        "name": $userName
                    };
                    
        const record = await pocketbase.collection('users').create(newUserBody);
        const authData = await pocketbase.collection('users').authWithPassword(
            record.email,
            $password,
        );

        if(pocketbase.authStore.isValid) {
            submitting_sign_up = false
            successfulRegistration()
        } else {
            submitting_sign_up = false
            unsuccessfulRegistration()
        }
    }





    const successfulRegistration = () => {
        showSignUp = false
        successModalState = true
        setTimeout(() => {
            window.location.replace('/profile')
        }, 3000)
    }
    const unsuccessfulRegistration = () => {
        showSignUp = false
        failureModalState = true
        window.localStorage.removeItem("userName");
        window.localStorage.removeItem("userNumber");
    }
    
    // Sign in functions
    const handleSignIn = async () => {
        if(($userNumber || $userEmail) && $password) {
            submitting_sign_in = true;

            let user;

            if ($userEmail) {
                user = $userEmail   
            } else {
                user = $userNumber  
            }

            const authData = await pocketbase.collection('users').authWithPassword(
                user,
                $password,
            );

            if(pocketbase.authStore.isValid) {
                submitting_sign_in = false
                successfulSignIn()
            } else {
                submitting_sign_in = false
                unsuccessfulSignIn()
            }



        }
    }
    const successfulSignIn = () => {
        showSignIn = false
        successSignInModalState = true
        setTimeout(() => {
            window.location.replace('/profile')
        }, 3000)
    }
    const unsuccessfulSignIn = () => {
        showSignIn = false
        failureSignInModalState = true
    }

    // Password Reset functions 
    const submitPasswordReset = async () => {
        if($userEmail) {
          const reset = await pocketbase.collection('users').requestPasswordReset($userEmail);
          if(reset) {
            successfulPasswordReset()
          }
        }
    }
    const successfulPasswordReset = () => {
        successfulPasswordResetModalState = true
        showPasswordReset = false
        setTimeout(() => {
            successfulPasswordResetModalState = false
            showSignIn = true
        }, 4000)
    }

    // Setting Variables
    const setUserName = (e) => {
        userName.set(e.target.value);
        window.localStorage.setItem('userName', e.target.value)
    }
    const setUserNumber = (e) => {
        let trimmed = e.target.value.split('-').join('')
        userNumber.set(trimmed)
        window.localStorage.setItem('userNumber', trimmed)
    }
    const setAvatar = (e) => {
        avatar.set(e.target.files[0])
        console.log(e.target.files[0])
    }
    const setEmail = (e) => {
        userEmail.set(e.target.value)
    }
    const setPassword = (e) => {
        password.set(e.target.value)
    }
    const setPasswordConfirm = (e) => {
        passwordConfirm.set(e.target.value)
    }
    const checkPasswordMatch = (e) => {
        if($password == e.target.value) {
            passwordSet.set(true)
            regPasswordInputWrapper.style.borderColor = '#9bfab0'
            passwordInputConfirmWrapper.style.borderColor = '#9bfab0'
        } else {
            passwordSet.set(false)
            regPasswordInputWrapper.style.borderColor = '#fe2b00'
            passwordInputConfirmWrapper.style.borderColor = '#fe2b00'
        }
    }

    // Field Validation
    
    const validateSignUpTel = (e) => {
        let phoneNumberPattern = /^\d{4}-\d{3}-\d{3}$/;
        if (phoneNumberPattern.test(e.target.value)) {
            signUpPhoneInput.style.borderColor = '#9bfab0'
        } else {
            signUpPhoneInput.style.borderColor = '#fe2b00'
        }
    }
    const validateEmail = (e) => {
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailPattern.test(e.target.value)) {
            emailInput.style.borderColor = '#9bfab0'
        } else if (e.target.value == "") {
            emailInput.style.borderColor = '#ffffff'
        } else {
            emailInput.style.borderColor = '#fe2b00'
        }
    }

    // Toggle Forms
    const togglePasswordReset = () => {
        showPasswordReset = true
        showSignIn = false
        showSignUp = false
        failureSignInModalState = false
        failureModalState = false
        registerPageOne = true
    }
    const toggleSignUp = () => {
        showPasswordReset = false
        showSignIn = false
        showSignUp = true
        registerPageOne = true
        failureSignInModalState = false
        failureModalState = false
    }
    const toggleSignIn = () => {
        registerPageOne = true
        showSignIn = true
        showSignUp = false
        showPasswordReset = false
        failureSignInModalState = false
        failureModalState = false
    }

    // Password visibility
    const togglePasswordVisibilty = () => {
        showPassword = !showPassword
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    const toggleRegPasswordVisibilty = () => {
        showPassword = !showPassword
        if (regPasswordInput.type === "password") {
            regPasswordInput.type = "text";
        } else {
            regPasswordInput.type = "password";
        }
    }
    const togglePasswordConfirmVisibilty = () => {
        showPasswordConfirm = !showPasswordConfirm
        if (passwordConfirmInput.type === "password") {
            passwordConfirmInput.type = "text";
        } else {
            passwordConfirmInput.type = "password";
        }
    }

    // iMask options
    const phone_number_options = {
		mask: '{0}000-000-000'
    };
</script>
<style>
    .authWrapper {
        @apply bg-black h-auto min-h-screen relative;
    }
    .signInWrapper, .registerWrapper {
        @apply pt-10 pb-10 px-6 h-auto;
    }
    .logoWrapper {
        @apply h-12 w-12 inline-flex;
    }
    .logoLink {
        @apply w-auto h-auto inline-flex;
    }
    h2 {
        @apply font-semibold text-3xl text-white mt-8 mb-10;
    }
    .formItem{
        @apply flex flex-col mb-10 w-full relative bg-prime rounded-2xl border-2 border-white;
    }
    .formItem label {
        @apply w-fit absolute bg-prime font-semibold text-sm text-white -top-5 py-2 px-2 left-4 mb-5;
    }
    input[type="text"], input[type="tel"], input[type="email"], input[type="password"] {
        @apply text-white text-lg bg-prime py-5 px-8 rounded-2xl w-full focus-visible:text-white focus-visible:outline-0 appearance-none;
    }
    .submitBtnWrapper {
        @apply bg-white flex flex-col justify-center items-center py-5 mb-10 w-full rounded-2xl;
    }
    .signInBtnWrapper, .signInFailBtn, .signUpFailBtn {
        @apply bg-white flex flex-col justify-center items-center py-5 mb-6 w-full rounded-2xl cursor-pointer;
    }
    .submitBtnWrapper span, .signInBtnWrapper span, .signInFailBtn span, .signUpFailBtn span {
        @apply text-prime font-semibold;
    }
    input[type="submit"], .nextBtn {
        @apply px-8 rounded-2xl text-base font-bold uppercase text-prime antialiased flex justify-center items-center;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        transition: background-color 5000000s;
        -webkit-text-fill-color: white !important;
    }
    input::placeholder {
        @apply italic text-base;
    }
    .formItem.pwd {
        @apply flex flex-row;
    }
    .toggleVisibility {
        @apply flex justify-center items-center h-auto w-24 cursor-pointer;
    }
    .toggleVisibility img {
        @apply h-8 w-8;
    }
    .toggleVisibility .hide {
        @apply opacity-60;
    }
    .successModal, .failureModal {
        @apply h-full min-h-[inherit] flex flex-col justify-center items-center w-full absolute;
    }
    .failureModal {
        @apply px-7;
    }
    .successHeader {
        @apply text-white font-semibold text-xl mt-4;
    }
    .successPara {
        @apply px-6 text-white mt-6 text-justify font-medium;
    }
    .resetLink {
        @apply flex justify-center items-center cursor-pointer;
    }
    .resetLink span {
        @apply text-highlight text-[0.8rem];
    }
    .registerLinkWrapper {
        @apply flex flex-col items-center text-white mt-8;
    }
    .registerLinkWrapper span {
        @apply text-[0.75rem];
    }
    .registerLinkWrapper .registerLink {
        @apply border-white border rounded-2xl w-full flex justify-center py-5 mt-2 cursor-pointer;
    }
    .registerLinkWrapper .registerLink span {
        @apply text-base;
    }
    .signInLinkWrapper {
        @apply mt-6;
    }
    .signInLinkText {
        @apply text-white;
    }
    .signInLink {
        @apply text-highlight cursor-pointer;
    }
    .passwordResetWrapper {
        @apply flex flex-col items-center h-screen py-10 px-6;
    }
    .passwordResetContent {
        @apply flex flex-col;
    }
    .passwordResetContent p {
        @apply mb-8 text-white text-justify leading-relaxed;
    }
    .passwordResetNavigation {
        @apply flex flex-row w-full justify-between;
    }
    .passwordResetNavigationBtn {
        @apply rounded-2xl border px-6 py-4 flex justify-center items-center cursor-pointer;
    }
    .passwordResetNavigationBtn span {
        @apply font-medium;
    }
    .passwordResetNavigationBtn:nth-of-type(1) {
        @apply border-white text-white;
    }
    .passwordResetNavigationBtn:nth-of-type(2) {
        @apply text-prime bg-white;
    }
</style>


<div class="authWrapper">

    <!-- Sign in Form -->
    {#if showSignIn}
        <div class="signInWrapper" transition:fade>
            <a href='/' class="logoLink">
                <div class="logoWrapper">
                    <img src="/logo.png" alt="Pebble logo"/>
                </div>
            </a>
            <h2>Sign In</h2>

            <form class="signInForm">
                <div class="formItem" bind:this={emailInput}>
                    <label for="userEmail">Email</label>
                    <input 
                        id="userEmail" 
                        type="email"
                        autocomplete="username"
                        placeholder="joe@example.com"
                        on:change={setEmail}
                        on:focusout={validateEmail}
                    /> 
                </div>
                <div class="formItem pwd" bind:this={passwordInputWrapper}>
                    <label for="password">Password</label>
                    <input 
                        bind:this={passwordInput}
                        id="password" 
                        type="password" 
                        autocomplete="current-password"
                        on:change={setPassword}
                    />
                    <div class="toggleVisibility" on:click={togglePasswordVisibilty}>
                        {#if showPassword}
                            <img src="/show.png" alt="Your password is visible, click here to mask it." />
                        {:else}
                            <img class="hide" src="/hide.png" alt="Your password is hidden.  Clicking here will display your password on screen" />
                        {/if}
                    </div> 
                </div>
                <div class="signInBtnWrapper" on:click|preventDefault={handleSignIn}>
                    {#if submitting_sign_in}
                        <div class="spinner_wrapper">
                            <div class="lds-ellipsis_prime">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    {:else}
                        <span>SIGN IN</span>
                    {/if}
                </div>
            </form>
            <div class='resetLink' on:click={togglePasswordReset}>
                <span>Forgotten your password?</span>
            </div>
            <div class='registerLinkWrapper'>
                <span>Don't have an account?</span>
                <div  class='registerLink' on:click={toggleSignUp}>
                    <span>REGISTER</span>
                </div>
            </div>
        </div>
    {/if}
    {#if successSignInModalState}
        <div class='successModal' bind:this={successSignInModal} transition:fade>
            <video autoplay muted>
                <source src="/animatedTick.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Sign in successful</h1>
            </div>
        </div>
    {/if}
    {#if failureSignInModalState}
        <div class='failureModal' bind:this={successSignInModal} transition:fade>
            <video autoplay muted>
                <source src="/error.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Sign in unsuccessful</h1>
            </div>
            <div class="mt-8">
                <p class="text-center text-white mb-4">The email and password you submitted do not match.</p>
            </div>
            <div class="signInFailBtn" on:click={toggleSignIn}>
                <span>BACK</span>
            </div>
        </div>
    {/if}

    <!-- Password reset form -->
    {#if showPasswordReset}
        <div class='passwordResetWrapper' transition:fade>
            <div class='passwordResetContent'>
                <a href='/' class="logoLink">
                    <div class="logoWrapper">
                        <img src="/logo.png" alt="Pebble logo"/>
                    </div>
                </a>
                <h2>Forgotten your password?</h2>
                <p>Enter your email below and click on 'RESET PASSWORD'.  A password reset link will be sent to the email address you used to sign up.</p>

            <form>
                <div class='formItem' bind:this={emailInput}>
                    <label for="userEmail">Email</label>
                    <input
                    on:change={setEmail}
                    on:focusout={validateEmail}
                    id="userEmail" 
                    type="email"
                    placeholder="jane@google.com" 
                    /> 
                </div>
                <div class='passwordResetNavigation'>
                    <div class='passwordResetNavigationBtn' on:click={toggleSignIn}>
                        <span>CANCEL</span>
                    </div>
                    <div class='passwordResetNavigationBtn' on:click={submitPasswordReset}>
                        <span>RESET PASSWORD</span>
                    </div>
                </div>
            </form>
            </div>
        </div>
    {/if}
    {#if successfulPasswordResetModalState}
        <div class='successModal' bind:this={successPasswordResetModal} transition:fade>
            <video autoplay muted>
                <source src="/animatedTick.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Password reset initiated.</h1>
            </div>
            <p class='successPara'>You will receive an email with a link to reset your password.</p>
        </div>
    {/if}
    
    <!-- Registration form -->
    {#if showSignUp}
        <div class="registerWrapper" transition:fade>
            <a href='/home' class="logoLink">
                <div class="logoWrapper">
                    <img src="/logo.png" alt="Pebble logo"/>
                </div>
            </a>
            <div class='signInLinkWrapper'>
                <span class='signInLinkText'>Already have an account?</span>
                <span class='signInLink' on:click={toggleSignIn}>Sign In</span>
            </div>
            <h2>Register</h2>

            <form class="signInForm">
                {#if registerPageOne}
                    <div class="formItem" bind:this={nameInput}>
                        <label for="userName">Name</label>
                        <input 
                            id="userName" 
                            type="text"
                            placeholder="Kwame Mensah"
                            on:change={setUserName}/> 
                    </div>
                    <div class="formItem" bind:this={signUpPhoneInput}>
                        <label for="userNumber">Phone</label>
                        <input
                        on:focusout={validateSignUpTel}
                        on:change={setUserNumber}
                        use:imask={phone_number_options} 
                        id="userNumber" 
                        type="tel"
                        placeholder="0555-555-555" /> 
                    </div>
                    <div class="formItem" bind:this={avatarInput}>
                        <label for="avatarInput">Choose a profile picture</label>
                        <input
                        on:change={setAvatar}
                        accept="image/png, image/jpeg"
                        id="avatarInput" 
                        type="file" /> 
                    </div>
                    <div class="formItem" bind:this={emailInput}>
                        <label for="email">Email</label>
                        <input 
                            id="email" 
                            type="email"
                            placeholder="user@google.com"
                            on:change={setEmail} 
                            on:focusout={validateEmail}
                        /> 
                    </div>

                    <div class="formItem pwd" bind:this={regPasswordInputWrapper}>
                        <label for="password">Password</label>
                        <input 
                            bind:this={regPasswordInput}
                            id="password" 
                            type="password" 
                            autocomplete="current-password"
                            on:change={setPassword}
                        />
                        <div class="toggleVisibility" on:click={toggleRegPasswordVisibilty}>
                            {#if showPassword}
                                <img src="/show.png" alt="Your password is visible, click here to mask it." />
                            {:else}
                                <img class="hide" src="/hide.png" alt="Your password is hidden.  Clicking here will display your password on screen" />
                            {/if}
                        </div> 
                    </div>
                    <div class="formItem pwd" bind:this={passwordInputConfirmWrapper}>
                        <label for="passwordConfirm">Confirm Password</label>
                        <input 
                            bind:this={passwordConfirmInput} 
                            id="passwordConfirm" 
                            type="password" 
                            autocomplete="new-password"
                            on:change={setPasswordConfirm}
                            on:focusout={checkPasswordMatch}
                        /> 
                        <div class="toggleVisibility" on:click={togglePasswordConfirmVisibilty}>
                            {#if showPasswordConfirm}
                                <img src="/show.png" alt="Your password is visible, click here to mask it." />
                            {:else}
                                <img class="hide" src="/hide.png" alt="Your password is hiddem.  Clicking here will display your password on screen" />
                            {/if}
                        </div>
                    </div>
                    <div class="submitBtnWrapper" on:click|preventDefault={handleSignUp}>
                        {#if submitting_sign_up}
                            <div class="spinner_wrapper">
                                <div class="lds-ellipsis_prime">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        {:else}
                        <span>Register</span>
                        {/if}
                    </div>
                {/if}
            </form>
        </div>
    {/if}
    {#if successModalState}
        <div class='successModal' bind:this={successModal} transition:fade>
            <video autoplay muted>
                <source src="/animatedTick.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Registration successful</h1>
            </div>
        </div>
    {/if}
    {#if failureModalState}
        <div class='failureModal' transition:fade>
            <video autoplay muted>
                <source src="/error.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="successHeader">
                <h1>Registration unsuccessful</h1>
            </div>
            <div class="mt-8">

                <!-- {#if phoneNumberAlreadyRegistered}
                    <p class="text-center text-white mb-4">The phone number you submitted is already registered.</p>
                {/if} -->
            </div>
            <div class="signUpFailBtn" on:click={toggleSignIn}>
                <span>BACK TO SIGN IN</span>
            </div>
        </div>
    {/if}
</div>