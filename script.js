/* ============================================================
   Infiniloop Technologies - AJM
   COMPLETE WEBSITE JAVASCRIPT

   MAIN FLOW

   USER
      ↓
   FORM VALIDATION
      ↓
   SUPABASE
      ↓
   SAVE ENQUIRY
      ↓
   EMAILJS
      ↓
   OWNER RECEIVES EMAIL
      ↓
   SUCCESS POPUP

   IMPORTANT:
   Navbar is controlled only by CSS position: fixed.
   JavaScript NEVER moves the navbar.
============================================================ */


/* ============================================================
   SUPABASE CONFIGURATION
============================================================ */

const SUPABASE_URL =
    "https://phxycsioosulmseiqkqp.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_yA6AiLUEwKjcmDevMxKZNA_rtDdpbny";


/* ============================================================
   EMAILJS CONFIGURATION
============================================================ */

const EMAILJS_SERVICE_ID =
    "service_236ljbq";

const EMAILJS_TEMPLATE_ID =
    "template_61rokcj";


/* ============================================================
   GLOBAL SUPABASE CLIENT
============================================================ */

let supabaseClient = null;


/* ============================================================
   INITIALIZE SUPABASE
============================================================ */

function initializeSupabase() {

    if (!window.supabase) {

        console.error(
            "Supabase library was not loaded."
        );

        return false;
    }

    try {

        supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_PUBLISHABLE_KEY
            );

        console.log(
            "Supabase initialized successfully."
        );

        return true;

    } catch (error) {

        console.error(
            "Supabase initialization error:",
            error
        );

        return false;
    }
}


/* ============================================================
   DOM READY
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Infiniloop Technologies website loaded."
        );


        /* ====================================================
           SUPABASE
        ==================================================== */

        initializeSupabase();


        /* ====================================================
           GENERAL WEBSITE
        ==================================================== */

        initializeYear();

        // initializeNavbar();
        // handleNavbarScroll();

        // initializeMobileNavigation();

        initializeRevealAnimation();

        initializeBackToTop();

        initializeServiceLinks();

        initializeMessageCounter();

        initializeSmoothScrolling();

        initializePageLoader();

        initializeActivePage();


        /* ====================================================
           CONTACT PAGE ONLY
        ==================================================== */

        const enquiryForm =
            document.getElementById(
                "enquiryForm"
            );

        if (enquiryForm) {

            initializeContactForm();

        }


        /* ====================================================
           SUCCESS POPUP
        ==================================================== */

        const successPopup =
            document.getElementById(
                "enquirySuccessPopup"
            );

        if (successPopup) {

            initializeEnquirySuccessPopup();

        }


        console.log(
            "All website JavaScript initialized successfully."
        );

    }
);


/* ============================================================
   CURRENT YEAR
============================================================ */

function initializeYear() {

    const element =
        document.getElementById(
            "currentYear"
        );

    if (!element) {
        return;
    }

    element.textContent =
        new Date().getFullYear();
}




// /* ============================================================
//    FIXED NAVBAR SCROLL EFFECT
//    Infiniloop Technologies
//    ============================================================ */

// document.addEventListener("DOMContentLoaded", function () {

//     const mainNav = document.getElementById("mainNav");

//     if (!mainNav) {
//         return;
//     }

//     function handleNavbarScroll() {

//         if (window.scrollY > 20) {
//             mainNav.classList.add("scrolled");
//         } else {
//             mainNav.classList.remove("scrolled");
//         }

//     }

//     handleNavbarScroll();

//     window.addEventListener(
//         "scroll",
//         handleNavbarScroll,
//         {
//             passive: true
//         }
//     );

// });

/* ============================================================
   REVEAL ANIMATION
============================================================ */

function initializeRevealAnimation() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!elements.length) {
        return;
    }


    /*
       Accessibility:
       Show everything immediately if
       IntersectionObserver is unavailable.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            function (element) {

                element.classList.add(
                    "active"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );
}


/* ============================================================
   BACK TO TOP
============================================================ */

function initializeBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );

    if (!button) {
        return;
    }


    function updateBackToTop() {

        if (window.scrollY > 300) {

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    updateBackToTop();
}


/* ============================================================
   SERVICE LINKS
============================================================ */

function initializeServiceLinks() {

    const links =
        document.querySelectorAll(
            "[data-service]"
        );

    if (!links.length) {
        return;
    }


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    const service =
                        this.dataset.service;

                    const select =
                        document.getElementById(
                            "service"
                        );

                    if (
                        !select ||
                        !service
                    ) {

                        return;

                    }


                    const option =
                        Array.from(
                            select.options
                        ).find(
                            function (option) {

                                return (
                                    option.value
                                        .toLowerCase() ===
                                    service
                                        .toLowerCase()
                                );

                            }
                        );


                    if (option) {

                        select.value =
                            option.value;

                    }

                }
            );

        }
    );
}


/* ============================================================
   MESSAGE COUNTER
============================================================ */

function initializeMessageCounter() {

    const message =
        document.getElementById(
            "message"
        );

    const counter =
        document.getElementById(
            "messageCount"
        );

    if (
        !message ||
        !counter
    ) {

        return;

    }


    message.addEventListener(
        "input",
        function () {

            counter.textContent =
                message.value.length;

        }
    );


    counter.textContent =
        message.value.length;
}


/* ============================================================
   CONTACT FORM
============================================================ */

function initializeContactForm() {

    const form =
        document.getElementById(
            "enquiryForm"
        );

    if (!form) {
        return;
    }


    console.log(
        "Enquiry form found successfully."
    );


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            console.log(
                "Enquiry form submitted."
            );


            clearFormErrors();

            hideFormMessage();


            const formData =
                getFormData(form);


            /* ================================================
               VALIDATE
            ================================================= */

            const validation =
                validateForm(
                    formData
                );


            if (!validation.valid) {

                displayValidationErrors(
                    validation.errors
                );


                const firstError =
                    Object.keys(
                        validation.errors
                    )[0];


                const firstInput =
                    document.getElementById(
                        firstError
                    );


                if (firstInput) {

                    firstInput.focus();

                }


                showFormMessage(
                    "error",
                    "Please correct the highlighted fields and try again."
                );


                return;
            }


            /* ================================================
               START LOADING
            ================================================= */

            setEnquiryLoading(
                true
            );


            try {

                console.log(
                    "Sending enquiry..."
                );


                await sendEnquiry(
                    formData
                );


                /* ============================================
                   SUCCESS
                ============================================ */

                console.log(
                    "ENQUIRY SUCCESS"
                );


                /* ============================================
                   CLEAR FORM
                ============================================ */

                form.reset();


                /* ============================================
                   RESET COUNTER
                ============================================ */

                const messageCount =
                    document.getElementById(
                        "messageCount"
                    );

                if (messageCount) {

                    messageCount.textContent =
                        "0";

                }


                /* ============================================
                   HIDE FORM MESSAGE
                ============================================ */

                hideFormMessage();


                /* ============================================
                   SHOW POPUP
                ============================================ */

                showEnquirySuccessPopup();


            } catch (error) {

                console.error(
                    "ENQUIRY ERROR:",
                    error
                );


                console.error(
                    "Final error message:",
                    error?.message
                );


                showFormMessage(
                    "error",
                    error?.message ||
                    "Something went wrong. Please try again."
                );


            } finally {

                setEnquiryLoading(
                    false
                );

            }

        }
    );
}


/* ============================================================
   GET FORM DATA
============================================================ */

function getFormData(form) {

    return {

        name:
            form.querySelector(
                "#name"
            )?.value.trim() || "",

        phone:
            form.querySelector(
                "#phone"
            )?.value.trim() || "",

        email:
            form.querySelector(
                "#email"
            )?.value.trim() || "",

        service:
            form.querySelector(
                "#service"
            )?.value.trim() || "",

        subject:
            form.querySelector(
                "#subject"
            )?.value.trim() || "",

        message:
            form.querySelector(
                "#message"
            )?.value.trim() || "",

        website:
            form.querySelector(
                "#website"
            )?.value.trim() || ""

    };
}


/* ============================================================
   VALIDATE FORM
============================================================ */

function validateForm(data) {

    const errors = {};


    /* ========================================================
       NAME
    ======================================================== */

    if (!data.name) {

        errors.name =
            "Please enter your name.";

    } else if (
        data.name.length < 2
    ) {

        errors.name =
            "Name must contain at least 2 characters.";

    } else if (
        data.name.length > 100
    ) {

        errors.name =
            "Name is too long.";

    }


    /* ========================================================
       PHONE
    ======================================================== */

    if (!data.phone) {

        errors.phone =
            "Please enter your phone number.";

    } else {

        const phonePattern =
            /^[0-9+\-\s()]{7,30}$/;

        if (
            !phonePattern.test(
                data.phone
            )
        ) {

            errors.phone =
                "Please enter a valid phone number.";

        }

    }


    /* ========================================================
       EMAIL
    ======================================================== */

    if (!data.email) {

        errors.email =
            "Please enter your email address.";

    } else {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(
                data.email
            )
        ) {

            errors.email =
                "Please enter a valid email address.";

        }

        if (
            data.email.length > 150
        ) {

            errors.email =
                "Email address is too long.";

        }

    }


    /* ========================================================
       SERVICE
    ======================================================== */

    if (!data.service) {

        errors.service =
            "Please select a service.";

    }


    /* ========================================================
       SUBJECT
    ======================================================== */

    if (
        data.subject &&
        data.subject.length > 200
    ) {

        errors.subject =
            "Subject is too long.";

    }


    /* ========================================================
       MESSAGE
    ======================================================== */

    if (!data.message) {

        errors.message =
            "Please enter your message.";

    } else if (
        data.message.length < 5
    ) {

        errors.message =
            "Please enter a more detailed message.";

    } else if (
        data.message.length > 3000
    ) {

        errors.message =
            "Message cannot exceed 3000 characters.";

    }


    /* ========================================================
       HONEYPOT
    ======================================================== */

    if (data.website) {

        errors.website =
            "Spam submission detected.";

    }


    return {

        valid:
            Object.keys(errors).length === 0,

        errors

    };
}


/* ============================================================
   DISPLAY VALIDATION ERRORS
============================================================ */

function displayValidationErrors(errors) {

    Object.keys(errors).forEach(
        function (fieldName) {

            const input =
                document.getElementById(
                    fieldName
                );

            if (!input) {
                return;
            }


            input.classList.add(
                "is-invalid"
            );


            const errorElement =
                document.getElementById(
                    fieldName + "Error"
                );


            if (errorElement) {

                errorElement.textContent =
                    errors[fieldName];

            }

        }
    );
}


/* ============================================================
   CLEAR FORM ERRORS
============================================================ */

function clearFormErrors() {

    const inputs =
        document.querySelectorAll(
            "#enquiryForm .is-invalid"
        );


    inputs.forEach(
        function (input) {

            input.classList.remove(
                "is-invalid"
            );

        }
    );


    const errors =
        document.querySelectorAll(
            "#enquiryForm .invalid-feedback"
        );


    errors.forEach(
        function (element) {

            element.textContent =
                "";

        }
    );
}


/* ============================================================
   SET ENQUIRY LOADING
============================================================ */

function setEnquiryLoading(
    loading
) {

    const button =
        document.getElementById(
            "sendEnquiryBtn"
        );

    const buttonText =
        document.getElementById(
            "sendButtonText"
        );

    const buttonLoading =
        document.getElementById(
            "sendButtonLoading"
        );


    if (!button) {
        return;
    }


    button.disabled =
        loading;


    if (buttonText) {

        buttonText.classList.toggle(
            "d-none",
            loading
        );

    }


    if (buttonLoading) {

        buttonLoading.classList.toggle(
            "d-none",
            !loading
        );

    }


    button.setAttribute(
        "aria-busy",
        loading
            ? "true"
            : "false"
    );
}


/* ============================================================
   SHOW FORM MESSAGE
============================================================ */

function showFormMessage(
    type,
    message
) {

    const element =
        document.getElementById(
            "formMessage"
        );


    if (!element) {
        return;
    }


    element.style.display =
        "block";


    element.className =
        "alert";


    if (type === "success") {

        element.classList.add(
            "alert-success"
        );

    } else {

        element.classList.add(
            "alert-danger"
        );

    }


    element.textContent =
        message;


    element.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });
}


/* ============================================================
   HIDE FORM MESSAGE
============================================================ */

function hideFormMessage() {

    const element =
        document.getElementById(
            "formMessage"
        );


    if (!element) {
        return;
    }


    element.style.display =
        "none";


    element.textContent =
        "";
}


/* ============================================================
   SEND ENQUIRY
============================================================ */

async function sendEnquiry(
    formData
) {

    console.log(
        "Sending enquiry...",
        formData
    );


    /* ========================================================
       HONEYPOT
    ======================================================== */

    if (
        formData.website !== ""
    ) {

        console.warn(
            "Spam submission detected."
        );

        throw new Error(
            "Spam submission detected."
        );
    }


    /* ========================================================
       VALIDATION
    ======================================================== */

    const validation =
        validateForm(
            formData
        );


    if (!validation.valid) {

        throw new Error(
            Object.values(
                validation.errors
            )[0]
        );

    }


    /* ========================================================
       CHECK SUPABASE
    ======================================================== */

    if (!supabaseClient) {

        throw new Error(
            "Supabase is not initialized."
        );

    }


    /* ========================================================
       PREPARE DATABASE DATA
    ======================================================== */

    const enquiryData = {

        name:
            formData.name,

        phone:
            formData.phone,

        email:
            formData.email,

        service:
            formData.service,

        subject:
            formData.subject ||
            "New Website Enquiry",

        message:
            formData.message

    };


    console.log(
        "Enquiry data:",
        enquiryData
    );


    /* ========================================================
       SAVE TO SUPABASE
    ======================================================== */

    const {
        error: supabaseError
    } = await supabaseClient
        .from("enquiries")
        .insert([
            enquiryData
        ]);


    /* ========================================================
       SUPABASE ERROR
    ======================================================== */

    if (supabaseError) {

        console.error(
            "Supabase enquiry error:",
            supabaseError
        );


        throw new Error(
            "Database error: " +
            supabaseError.message
        );

    }


    console.log(
        "Enquiry saved successfully in Supabase."
    );


    /* ========================================================
       CHECK EMAILJS
    ======================================================== */

    if (!window.emailjs) {

        throw new Error(
            "EmailJS library was not loaded."
        );

    }


    /* ========================================================
       DATE
    ======================================================== */

    const date =
        new Date().toLocaleString(
            "en-IN",
            {
                dateStyle: "medium",

                timeStyle: "short"
            }
        );


    /* ========================================================
       EMAILJS TEMPLATE PARAMETERS
    ======================================================== */

    const templateParams = {

        name:
            formData.name,

        email:
            formData.email,

        phone:
            formData.phone,

        service:
            formData.service,

        subject:
            formData.subject ||
            "New Website Enquiry",

        message:
            formData.message,

        date:
            date

    };


    console.log(
        "Sending enquiry email...",
        templateParams
    );


    /* ========================================================
       SEND EMAIL
    ======================================================== */

    try {

        await emailjs.send(

            EMAILJS_SERVICE_ID,

            EMAILJS_TEMPLATE_ID,

            templateParams

        );


        console.log(
            "Owner email sent successfully."
        );


    } catch (emailError) {

        console.error(
            "EmailJS error:",
            emailError
        );


        /*
           IMPORTANT:

           Supabase already contains the enquiry.

           Therefore we do not pretend that
           the email was successful.
        */

        throw new Error(
            "Your enquiry was saved successfully, " +
            "but the email notification could not be sent."
        );

    }


    /* ========================================================
       SUCCESS
    ======================================================== */

    console.log(
        "Enquiry process completed successfully."
    );


    return true;
}


/* ============================================================
   SMOOTH SCROLLING
============================================================ */

function initializeSmoothScrolling() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    if (!links.length) {
        return;
    }


    links.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const id =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    /*
                       CSS scroll-padding-top also
                       handles fixed navbar clearance.
                    */

                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );
}


/* ============================================================
   SUCCESS POPUP INITIALIZATION
============================================================ */

function initializeEnquirySuccessPopup() {

    const popup =
        document.getElementById(
            "enquirySuccessPopup"
        );


    const closeButton =
        document.getElementById(
            "closeEnquiryPopup"
        );


    const okButton =
        document.getElementById(
            "enquiryPopupOk"
        );


    if (!popup) {
        return;
    }


    /* ========================================================
       CLOSE POPUP
    ======================================================== */

    function closePopup() {

        popup.classList.remove(
            "show"
        );


        /*
           Restore page scrolling.
        */

        document.body.style.overflow =
            "";

    }


    /* ========================================================
       CLOSE BUTTON
    ======================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePopup
        );

    }


    /* ========================================================
       OK BUTTON
    ======================================================== */

    if (okButton) {

        okButton.addEventListener(
            "click",
            closePopup
        );

    }


    /* ========================================================
       CLICK OUTSIDE POPUP
    ======================================================== */

    popup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === popup
            ) {

                closePopup();

            }

        }
    );


    /* ========================================================
       ESCAPE
    ======================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                popup.classList.contains(
                    "show"
                )
            ) {

                closePopup();

            }

        }
    );
}


/* ============================================================
   SHOW SUCCESS POPUP
============================================================ */

function showEnquirySuccessPopup() {

    const popup =
        document.getElementById(
            "enquirySuccessPopup"
        );


    if (!popup) {

        console.warn(
            "Cannot show success popup because " +
            "#enquirySuccessPopup was not found."
        );

        return;
    }


    popup.classList.add(
        "show"
    );


    /*
       Prevent background scrolling.
    */

    document.body.style.overflow =
        "hidden";


    console.log(
        "Enquiry success popup displayed."
    );
}


/* ============================================================
   PAGE LOADER
============================================================ */

function initializePageLoader() {

    const loader =
        document.getElementById(
            "pageLoader"
        );


    if (!loader) {
        return;
    }


    const hideLoader =
        function () {

            loader.classList.add(
                "loaded"
            );


            window.setTimeout(
                function () {

                    loader.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                    loader.style.pointerEvents =
                        "none";

                },
                650
            );

        };


    /*
       If the document has already finished loading.
    */

    if (
        document.readyState ===
        "complete"
    ) {

        window.setTimeout(
            hideLoader,
            250
        );

    } else {

        /*
           Normal load event.
        */

        window.addEventListener(
            "load",
            function () {

                window.setTimeout(
                    hideLoader,
                    250
                );

            },
            {
                once: true
            }
        );


        /*
           Safety fallback.
        */

        window.setTimeout(
            hideLoader,
            2200
        );

    }
}


/* ============================================================
   ACTIVE PAGE
============================================================ */

function initializeActivePage() {

    const currentPath =
        window.location.pathname;


    let currentPage =
        currentPath
            .split("/")
            .pop()
            .toLowerCase();


    /*
       If URL ends with /,
       consider it index.html.
    */

    if (
        !currentPage ||
        currentPage === ""
    ) {

        currentPage =
            "index.html";

    }


    const links =
        document.querySelectorAll(
            ".navbar-nav .nav-link[data-page]"
        );


    if (!links.length) {
        return;
    }


    links.forEach(
        function (link) {

            const page =
                (
                    link.getAttribute(
                        "data-page"
                    ) || ""
                ).toLowerCase();


            const isActive =
                page === currentPage;


            link.classList.toggle(
                "active",
                isActive
            );


            if (isActive) {

                link.setAttribute(
                    "aria-current",
                    "page"
                );

            } else {

                link.removeAttribute(
                    "aria-current"
                );

            }

        }
    );
}


/* ============================================================
   GLOBAL ERROR HANDLING
============================================================ */

window.addEventListener(
    "error",
    function (event) {

        console.error(
            "JavaScript error:",
            event.error ||
            event.message
        );

    }
);


window.addEventListener(
    "unhandledrejection",
    function (event) {

        console.error(
            "Unhandled promise rejection:",
            event.reason
        );

    }
);
 
