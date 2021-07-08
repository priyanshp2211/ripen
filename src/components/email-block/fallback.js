const content = {
    title: " Bananas about new tech ideas?",
    subTitle:
        " Subscribe to our tribe for early access to Ripen, and be the first to help shape the future of idea validation.\n" +
        "Stay informed and track your idea, for free.",
    input: {
        id: "email-input",
        type: "email",
        label: "Email is required please",
        placeholder: "Enter your email",
        variant: "outlined"
    },
    errors: {
        invalidEmail: "We require a valid email",
        empty: "Email is required please"
    },
    button: {
        states: {
            initial: "Submit",
            processing: "Sending request",
            success: "Welcome to the tribe. We'll be in touch with relevant news and updates",
            failed: "Failed! Try again."
        }
    }
};

export { content };
