(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        var failed = false;
        if ($("[name='service']:checked").length == 0) {
            $("[name='service']").attr('required', true);
            failed = true;
        }
        else {
            $("[name='service']").attr('required', false);
        }
        if (form.checkValidity() === false) {
            failed = true;
        }
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()