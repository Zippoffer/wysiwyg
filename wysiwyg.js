/////////////////////GLOBAL VARIABLES/////////////////////////////

// Text Input
var textInput = document.querySelector("textarea");
// Card Container
var container = document.getElementById("container");
// Global highlightedCard variable
var highlightedCard = null;

var about = "";



var people = [

    {
        title: "Painter",
        name: "Jackson Pollock",
        bio: "influential American painter and a major figure in the abstract expressionist movement. He was well known for his unique style of drip painting.",
        image: "http://www.jackson-pollock.org/images/jackson-pollock.jpg",
        lifespan: {
            birth: "28 January 1912",
            death: "11 August 1956"
        }
    }, {
        title: "Poet",
        name: "Dylan Thomas",
        bio: "When one burns one's bridges, what a very nice fire it makes. Do not go gentle into that good night but rage, rage against the dying of the light.",
        image: "http://www.englishwordplay.com/images/dylan.jpg",
        lifespan: {
            birth: "27 October 1914",
            death: "9 November 1953"
        }
    }, {
        title: "Painter and Sculptor",
        name: "Amadeo Modigliani",
        bio: "Italian Jewish painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces and figures.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Amedeo_Modigliani_Photo.jpg",
        lifespan: {
            birth: "12 July 1884",
            death: "24 January 1920"
        }
    }, {
        title: "Poet",
        name: "Charles Bukowski",
        bio: "Henry Charles Bukowski was a American poet, novelist, and short story writer. His writing was influenced by the social, cultural, and economic ambience of his home city of Los Angeles.",
        image: "http://drewfriedman.net/images/gallery/bukowski_lg.jpg",
        lifespan: {
            birth: "16 August 1920",
            death: "9 March 1994"
        }
    }, {
        title: "Artist",
        name: "Pablo Picasso",
        bio: "Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
        image: "http://www.pablo-ruiz-picasso.net/images/photo2/315.jpg",
        lifespan: {
            birth: "25 October 1881",
            death: "8 April 1973"
        }
    }, {
        title: "Singer/Songwriter",
        name: "Tom Waits",
        bio: "American singer-songwriter, composer, and actor. Waits has a distinctive voice, described by critic Daniel Durchholz as sounding like it was soaked in a vat of bourbon, left hanging in the smokehouse for a few months, and then taken outside and run over with a car.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrt9OSo7XRvlthPj8pqpjKitpIQ6blVq7spcaOaU_VCaPRxjfAjg",
        lifespan: {
            birth: "7 December 1949",
            death: "n/a"
        }
    }
]



function makeCards() {
    for (var i = 0; i < people.length; i++) {
        var currentPerson = people[i];

        var personCard = `<Guernica class="card">
                        <header>
                          <h2 class="personName">${currentPerson.name}</h2>
                          <h3>${currentPerson.title}</h3>
                        </header>
                        <section>
                          <div class="imageContainer">
                            <img src="${currentPerson.image}">
                          </div>
                          <p class="about">${currentPerson.bio}</p>
                        </section>
                        <footer>
                          <h4>${currentPerson.lifespan.birth} - ${currentPerson.lifespan.death}</h4}
                        </footer>
                      </Guernica>`;
        // Write person card to DOM
        container.innerHTML += personCard;
    }
}

//call to pull people from array and populate the dom
makeCards();

//function called when a card is clicked
function selectedCard(event) {
    //get the target of clicked element
    var element = event.target;
    console.log("element", element);
    if (element.id !== "container") {
        // Loop up heirarchy until <GUERNICA> element is found
        while (element.tagName !== "GUERNICA") {
            element = element.parentElement;
        }
    }
    // Ensure element is of type <GUERNICA>
    if (element.tagName === "GUERNICA") {

        // Check to make sure another card isn't highlighted
        if (highlightedCard === null) {
            // Toggle border class
            element.classList.toggle("border");
            // Bring focus to input box
            textInput.focus();

            // Set highlighted card
            highlightedCard = element;

            // If another card is selected
        } else {

            // Remove border from other card
            highlightedCard.classList.toggle("border");
            // Select new card
            highlightedCard = element;
            // Toggle border on new card
            highlightedCard.classList.toggle("border");
        }

        // to edit the bio information
        // for (var i = 0; i < people.length; i++) {
        //     var no = people[i];
        var bioEdit = event.target;
        about = element.querySelector(".about");
        // console.log("currentTarget", currentTarget);
        console.log("people", people);
        textInput.focus();
        // };
    }

}

// function enterListener(event) {
textInput.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        textInput.value = '';
        textInput.blur();
        highlightedCard.classList.toggle(".border");
        // code for enter
        console.log("you hit the enter key", textInput.value);
    } else console.log("there is nothing to empty");
});


// textInput.value = "";
// console.log(">>Text added, textInput cleared", textInput.value);
// console.log(">>Enter was pushed");
// }

function editBio(event, id) {
    about.innerHTML = textInput.value;
}


// textInput.addEventListener("keyUp", enterListener);
container.addEventListener("click", selectedCard);
textInput.addEventListener("input", editBio);