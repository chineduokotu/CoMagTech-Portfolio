document.addEventListener("DOMContentLoaded", function () {
  var detailsForm = document.querySelector("#destination-form");
  detailsForm.addEventListener("submit", handleSubmitForm);

  function handleSubmitForm(event) {
    event.preventDefault();
    //getting specific element from a form
    var desName = event.target.elements["name"].value;
    var desLocation = event.target.elements["location"].value;
    var desPhoto = event.target.elements["photo"].value;
    var desDescription = event.target.elements["description"].value;
    //clearing out the form field in each form element
    for (let i = 0; i < event.target.elements.length; i++) {
      if (event.target.elements[i].type != "submit") {
        event.target.elements[i].value = "";
      }
      //alert('you have submitted your vacation form')
    }

    //create card
    var desCard = createCardElement(
      desName,
      desLocation,
      desPhoto,
      desDescription
    );

    //change card
    var wishListContainer = document.getElementById("destination-container");
    if (wishListContainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }
    document.querySelector("#destination-container").appendChild(desCard);
  }

  function createCardElement(name, location, photoUrl, description) {
    var card = document.createElement("div");
    card.className = "card";

    var img = document.createElement("img");
    img.setAttribute("alt", name);
    img.className = "img";

    var constantPhotoUrl = "kk.jpg";
    if (photoUrl.length === 0) {
      img.setAttribute("src", constantPhotoUrl);
    } else {
      img.setAttribute("src", photoUrl);
    }
    card.appendChild(img);
    //creating card content
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    //creating card destination name
    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    //creating card location
    var cardSubTitle = document.createElement("h4");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    //ctreating card description
    if (description.length !== 0) {
      var cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }
    //creating remove button to delete card
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.className='delbtn';

    deleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(deleteBtn);

    //put card body inside card it self
    card.appendChild(cardBody);
    return card;
  }

  function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
  }
});
