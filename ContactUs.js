$("#formValidation").validate({
    rules:{
        name:{
            minlength: 8
        },
        email:{
            email: true
        },
    },
    messages: {
        name:{
        required: "Please enter your name",
        minlength: "Enter at least 2 character"
      },
      email: "Please enter an email address"
    },
    



    submitHandler: function(form) {
      form.submit();
    }
});