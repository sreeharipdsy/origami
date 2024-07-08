//form
$("#origami-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxJ37Bnv-qtsa1BCuGdkCeiJwQ_CTIPpVPFapLFKt_VPpVK3zDkvxGHVcYhZqI-ofMzbA/exec",
        data:$("#origami-form").serialize(),
        method:"post",
        success:function (response) {
            Swal.fire({
                title: "Thank you for choosing Origami!",
                text: "We will contact you soon",
                icon: "success"
            }).then ((result) => {
                window.location.reload();
            });
        },
        error:function (err) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Something went wrong"
            }); 
        }
    })
})

