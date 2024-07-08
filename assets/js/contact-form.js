//form
$("#origami-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzTsNrEW7ZJzVSnuCTJbTgqmSPpWARrD6c7Gd0ZdD3BSk1skcwpvlEIJwR_C7vbHjqL4w/exec",
        data:$("#origami-form").serialize(),
        method:"post",
        success:function (response) {
            Swal.fire({
                title: "Thank you!",
                text: "We will Catch you Soon..!",
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

