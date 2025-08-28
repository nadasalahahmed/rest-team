        // Toggle between Sign In and Sign Up forms
        function toggleForm() {
            var formTitle = document.getElementById("form-title");
            var authForm = document.getElementById("auth-form");
            var toggleText = document.querySelector(".toggle-auth");

            if (formTitle.textContent === "Sign In") {
                formTitle.textContent = "Sign Up";
                authForm.innerHTML = `
                    <h2>Sign Up</h2>
                    <form id="signUpForm">
                        <input type="text" id="name" placeholder="Your name" />
                        <div id="nameError" class="error"></div>
                        <input type="text" id="email" placeholder="Your email address" />
                        <div id="emailError" class="error"></div>
                        <input type="password" id="password" placeholder="Password" />
                        <div id="passwordError" class="error"></div>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                        <div id="confirmPasswordError" class="error"></div>
                        <button type="submit">Sign Up</button>
                        <p class="toggle-auth" onclick="toggleForm()">Already have an account? Sign In</p>
                    </form>
                `;
                addSignUpValidation();
            } else {
                formTitle.textContent = "Sign In";
                authForm.innerHTML = `
                    <h2>Sign In</h2>
                    <form id="signInForm">
                        <input type="text" id="email" placeholder="Your email address" />
                        <div id="emailError" class="error"></div>
                        <input type="password" id="password" placeholder="Password" />
                        <div id="passwordError" class="error"></div>
                        <button type="submit">Sign In</button>
                        <p class="toggle-auth" onclick="toggleForm()">Don't have an account? Sign Up</p>
                    </form>
                `;
                addSignInValidation();
            }
        }

        // Sign In form validation
        function addSignInValidation() {
            var signInForm = document.getElementById("signInForm");
            signInForm.addEventListener("submit", function (e) {
                e.preventDefault();

                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;

                document.getElementById("emailError").textContent = '';
                document.getElementById("passwordError").textContent = '';

                var isValid = true;

                var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailReg.test(email)) {
                    document.getElementById("emailError").textContent = "Please enter a valid email";
                    isValid = false;
                }

                if (password.length < 6) {
                    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
                    isValid = false;
                }

                if (isValid) {
                    alert("Sign In successful! (This is a demo)");
                    signInForm.reset();
                }
            });
        }

        // Sign Up form validation
        function addSignUpValidation() {
            var signUpForm = document.getElementById("signUpForm");
            signUpForm.addEventListener("submit", function (e) {
                e.preventDefault();

                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirmPassword").value;

                document.getElementById("nameError").textContent = '';
                document.getElementById("emailError").textContent = '';
                document.getElementById("passwordError").textContent = '';
                document.getElementById("confirmPasswordError").textContent = '';

                var isValid = true;

                var nameReg = /^[a-zA-Z]{2,10}$/;
                if (!nameReg.test(name)) {
                    document.getElementById("nameError").textContent = "Name must be 2-10 letters";
                    isValid = false;
                }

                var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailReg.test(email)) {
                    document.getElementById("emailError").textContent = "Please enter a valid email";
                    isValid = false;
                }

                if (password.length < 6) {
                    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
                    isValid = false;
                }

                if (password !== confirmPassword) {
                    document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
                    isValid = false;
                }

                if (isValid) {
                    alert("Sign Up successful! (This is a demo)");
                    signUpForm.reset();
                }
            });
        }

        // Initialize Sign In form validation
        addSignInValidation();
