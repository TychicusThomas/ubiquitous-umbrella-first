$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;
  //This here is the different classifications for the Anime Role
  let Anime = [
    ["Pirate", ["Law", "Luffy", "Shanks", "BlackBeard"]],
    ["Ninja", ["Naruto", "Sasuke", "Sai"]],
    ["Sould Reaper", ["Ichigo"] ["Chad"] ["Renji"]],
  ];

  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });
  // If I remove these from your previoius code example it crashes so I kept them. 
  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("remember, no alpha!");
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //This is example #4 
  $("#noNumbersDown").keydown(function (e) {
    let inputVal = $(this).val();

    // test input value against regular expression
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //when user selects species of pet...load in names from array
  $("#Anime Roles").on("change", function (e) {
    //Makes Anime selectrions drop down work
    $("#Anime Roles").prop("disabled", false);

    let inputVal = this.value;

    // console.log(inputVal);

    //loop though array of anime characters names
    $.each(petNames, function (key, value) {
      //match Anime Names to the roles selected
      if (inputVal === value[0]) {
        // console.log(value[0] + key + value);
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=Anime Roles]").text(nestValue);
              $("#Anime Roles").empty();
              $("#Anime Roles").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#Anime Roles").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  console.log("user name: " + $("#noSpaces").val());
});

  // successfully got the functions in there but for some reason they will not properly work :(, So at the end of the day I am just submitting something to show a attempt.