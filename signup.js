var animating = false;

var nextButtons = document.querySelectorAll(".next");
nextButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (animating) return false;
        animating = true;

        var current_fs = this.parentElement;
        var next_fs = this.parentElement.nextElementSibling;

        var progressbar = document.getElementById("progressbar");
        var fieldsets = Array.from(document.querySelectorAll("fieldset"));

        var nextIndex = fieldsets.indexOf(next_fs);

        // Activate next step on progressbar using the index of next_fs
        progressbar.getElementsByTagName("li")[nextIndex].classList.add("active");

        // Hide progress steps not associated with the current step
        fieldsets.forEach(function (fieldset, index) {
            if (index < nextIndex) {
                progressbar.getElementsByTagName("li")[index].classList.remove("active");
            } else if (index > nextIndex) {
                progressbar.getElementsByTagName("li")[index].classList.remove("active");
            }
        });

        // Show the next fieldset
        next_fs.style.display = "block";

        // Hide the current fieldset with style
        var currentOpacity = 1;
        var nextOpacity = 0;
        var animationInterval = setInterval(function () {
            currentOpacity -= 0.1;
            nextOpacity += 0.1;

            current_fs.style.opacity = currentOpacity;
            next_fs.style.opacity = nextOpacity;

            if (currentOpacity <= 0) {
                clearInterval(animationInterval);
                current_fs.style.display = "none";
                current_fs.style.opacity = 1;
                animating = false;
            }
        }, 5); // Adjust this interval (40 milliseconds) for faster animation
    });
});

var prevButtons = document.querySelectorAll(".previous");
prevButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (animating) return false;
        animating = true;

        var current_fs = this.parentElement;
        var previous_fs = this.parentElement.previousElementSibling;

        var progressbar = document.getElementById("progressbar");
        var fieldsets = Array.from(document.querySelectorAll("fieldset"));

        var previousIndex = fieldsets.indexOf(previous_fs);

        // Deactivate current step on progressbar
        progressbar.getElementsByTagName("li")[previousIndex].classList.remove("active");

        // Hide progress steps not associated with the current step
        fieldsets.forEach(function (fieldset, index) {
            if (index < previousIndex) {
                progressbar.getElementsByTagName("li")[index].classList.remove("active");
            } else if (index > previousIndex) {
                progressbar.getElementsByTagName("li")[index].classList.remove("active");
            }
        });

        // Show the previous fieldset
        previous_fs.style.display = "block";

        // Hide the current fieldset with style
        var currentOpacity = 1;
        var previousOpacity = 0;
        var animationInterval = setInterval(function () {
            currentOpacity -= 0.1;
            previousOpacity += 0.1;

            current_fs.style.opacity = currentOpacity;
            previous_fs.style.opacity = previousOpacity;

            if (currentOpacity <= 0) {
                clearInterval(animationInterval);
                current_fs.style.display = "none";
                current_fs.style.opacity = 1;
                animating = false;
            }
        },5); // Adjust this interval (40 milliseconds) for faster animation
    });
});
