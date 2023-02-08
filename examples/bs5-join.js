    (() => {
      const form = document.querySelector(".needs-validation");

      form.addEventListener(
        "submit",
        (e) => {
          if (!form.checkValidity()) {
            e.preventDefault(); // 작동하지 않게끔
            e.stopPropagation(); // 전파되지 않게끔
          }
          form.classList.add("was-validated");
        },
        false
      ); // addEventListener
      // forEach
    })();
