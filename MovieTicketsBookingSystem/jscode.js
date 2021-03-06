let posters = [
    poster0= {
        name: "hitmans-wifes-bodyguard",
        imgLink: "moviePoster/hitmans-wifes-bodyguard.jpg",
        posterID: 0,
        description: "Four years after the events of the original film, bodyguard Michael Bryce is on a company mandated sabbatical when Sonia Kincaid, the wife of hitman Darius Kincaid whom Bryce shares an uneasy friendship with, rescues him from an assassination attempt to rescue Darius. Due to his sabbatical, Bryce is not allowed to use firearms or lethal weapons of any kind and must use his wits and intelligence to save Darius and save the day.",
        cast: "Ryan Reynolds; Bartol Grozdek; Samuel L. Jackson; Salma Hayek; Frank Grillo; Antonio Banderas; Richard E. Grant; Tom Hopper; Kristofer Kamiyasu;Gabriella Wright; Dragan Mićanović",
    },
    poster1= {
        name: "in-the-earth",
        imgLink: "moviePoster/in-the-earth.jpg",
        posterID: 1,
        description: "As the world searches for a cure to a disastrous virus, a scientist and park scout venture deep into the forest for a routine equipment run. Through the night, their journey becomes a terrifying voyage through the heart of darkness, the forest coming to life around them.",
        cast: "Joel Fry; Reece Shearsmith; Hayley Squires; Ellora Torchia; John Hollingworth; Mark Monero"
    },
    poster2= {
        name: "luca",
        imgLink: "moviePoster/luca.jpg",
        posterID: 2,
        description: "In Portorosso, a seaside town on the Italian Riviera, a young boy named Luca shares adventures with his new best friend Alberto. But Luca and Alberto are hiding a secret: they are both sea monsters from a world below the water's surface.",
        cast: "Jacob Tremblay; Jack Dylan Grazer; Emma Berman; Maya Rudolph; Marco Barricelli; Saverio Raimondo (it) and Jim Gaffigan"
    },
    poster3= {
        name: "minari",
        imgLink: "moviePoster/minari.jpg",
        posterID: 3,
        description: "A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.",
        cast: "Alan S. Kim; Yeri Han; Noel Cho; Steven Yeun; Darryl Cox; Esther Moon; Ben Hall; Eric Starkey; Will Patton; Yuh-Jung Youn; Jacob M Wade; James Carroll; Jenny Phagan; Tina Parker; Chloe Lee"
    },
    poster4= {
        name: "nobody",
        imgLink: "moviePoster/nobody.jpg",
        posterID: 4,
        description: "Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage. In a barrage of fists, gunfire and squealing tires, Hutch must now save his wife and son from a dangerous adversary -- and ensure that he will never be underestimated again.",
        cast: "Bob Odenkirk; Connie Nielsen; Aleksei Serebryakov; RZA; Christopher Lloyd; Gage Munroe; Paisley Cadorath; Michael Ironside; Billy MacLellan Colin Salmon; Araya Mengesha; Aleksandr Pal; J. P. Manoux"
    },
    poster5= {
        name: "Oxygen",
        imgLink: "moviePoster/Oxygen.jpg",
        posterID: 5,
        description: "A woman wakes in a cryogenic chamber with no recollection of how she got there, and must find a way out before running out of air.",
        cast: "Mélanie Laurent; Mathieu Amalric; Malik Zidi; Marc Saez; Laura Boujenah; Lyah Valade; Marie Lemiale; Cathy Cerda; Eric Herson-Macarel; Pascal Germain"
    },
    poster6= {
        name: "spacejam-2",
        imgLink: "moviePoster/spacejam-2.jpg",
        posterID: 6,
        description: "NBA superstar LeBron James teams up with Bugs Bunny and the rest of the Looney Tunes for this long-awaited sequel.",
        cast: "Zendaya; Sonequa Martin-Green; Don Cheadle; Jim Cummings; Gabriel Iglesias; LeBron James; Martin Klebba; J. Michael Tatum; Eric Bauza; Xosha Roquemore; Candi Milo; Khris Davis; Jeff Bergman; Bob Bergen; Katie McCabe"
    },
    poster7= {
        name: "tenet",
        imgLink: "moviePoster/tenet.jpg",
        posterID: 7,
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        cast: "Juhan Ulfsak; Jefferson Hall; Ivo Uukkivi; Andrew Howard; John David Washington; Rich Ceraulo Ko; Jonathan Camp; Wes Chatham; Sander Rebane; Martin Donovan; Clémence Poésy; Josh Stewart; Robert Pattinson; Dimple Kapadia; Denzil Smith"
    },
    poster8= {
        name: "the_War_With_Grandpa",
        imgLink: "moviePoster/the_War_With_Grandpa.jpg",
        posterID: 8,
        description: "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
        cast: "Robert De Niro; Uma Thurman; Rob Riggle; Oakes Fegley; Laura Marano; Cheech Marin; Jane Seymour; Christopher Walken; Juliocesar Chavez; Isaac Kragten; T.J. McGibbon; Poppy Gagnon; Lydia Styslinger; Joe Gelchion; Colin Ford"
    },
    poster9= {
        name: "Zack-Snyder-Justice-League",
        imgLink: "moviePoster/Zack-Snyder-Justice-League.jpg",
        posterID: 9,
        description: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        cast: "Ben Affleck; Henry Cavill; Amy Adams; Gal Gadot; Ray Fisher; Jason Momoa; Ezra Miller; Willem Dafoe; Jesse Eisenberg; Jeremy Irons; Diane Lane; Connie Nielsen; J.K. Simmons; Ciarán Hinds; Ryan Zheng"
    },
];

let index = 1;
function changeImage() {
    let img = document.getElementById("image");
    index = index % posters.length;
    img.src = posters[index++].imgLink;
}

let loop = setInterval("changeImage()",1700);
function StopAblum() {
    clearInterval(loop);
}
//--------------------seat map--------------------
var seatArray = [
    [
        seat1A = {isSeleted : false},
        seat1B = {isSeleted : false},
        seat1C = {isSeleted : false},
        seat1D = {isSeleted : false},
        seat1E = {isSeleted : false},
        seat1F = {isSeleted : false},
        seat1G = {isSeleted : false},
        seat1H = {isSeleted : false}
    ],
    [
        seat2A = {isSeleted : false},
        seat2B = {isSeleted : false},
        seat2C = {isSeleted : false},
        seat2D = {isSeleted : false},
        seat2E = {isSeleted : false},
        seat2F = {isSeleted : false},
        seat2G = {isSeleted : false},
        seat2H = {isSeleted : false}        
    ],
    [
        seat3A = {isSeleted : false},
        seat3B = {isSeleted : false},
        seat3C = {isSeleted : false},
        seat3D = {isSeleted : false},
        seat3E = {isSeleted : false},
        seat3F = {isSeleted : false},
        seat3G = {isSeleted : false},
        seat3H = {isSeleted : false}        
    ],
    [
        seat4A = {isSeleted : false},
        seat4B = {isSeleted : false},
        seat4C = {isSeleted : false},
        seat4D = {isSeleted : false},
        seat4E = {isSeleted : false},
        seat4F = {isSeleted : false},
        seat4G = {isSeleted : false},
        seat4H = {isSeleted : false}        
    ],
    [
        seat5A = {isSeleted : false},
        seat5B = {isSeleted : false},
        seat5C = {isSeleted : false},
        seat5D = {isSeleted : false},
        seat5E = {isSeleted : false},
        seat5F = {isSeleted : false},
        seat5G = {isSeleted : false},
        seat5H = {isSeleted : false}        
    ]
];
//--------------------seat map end--------------------
//--------------------content page--------------------
let index2 = 0;
let content_page;//background
let close_btn;//content page
//let close_btn2;//seat page
let close_btn3;//cart page
let contentPage_image;//sub window poster
let contentPage_head;//sub window poster name
let contentPage_description;//sub window poster description
let contentPage_cast;//sub window poster cast

let seat_page;//background
//let seat_button;//button
let cart_page;

//cart
var cartItemDiv;
var totalPriceDiv;
var imgAddress;
var movieName;

//home
let home;
window.onload = function(){
    //content Page
    content_page = document.getElementById("contentPage");
    close_btn = document.getElementById("close");
    contentPage_image = document.getElementById("contentPage_image");
    contentPage_head = document.getElementById("contentPage_head");
    contentPage_description = document.getElementById("contentPage_description");
    contentPage_cast = document.getElementById("contentPage_cast");

    //seat Page
    seat_page = document.getElementById("seatPage");
    //seat_button = document.getElementsByClassName("toseatMap_button");
    //close_btn2 = document.getElementById("close2");

    //cart Page
    close_btn3 = document.getElementById("close3");
    cart_page = document.getElementById("cartPage");

    cartItemDiv = document.getElementById("checkOutBoxLeft");
    totalPriceDiv = document.getElementById("totalPrice");
}

function open_contentPage(index3){
    content_page.style.display = "block";
    //StopAblum();

    contentPage_head.innerHTML = posters[index3].name;
    movieName = contentPage_head.innerHTML;
    //change content page poster here
    contentPage_image.src = posters[index3].imgLink;
    imgAddress = contentPage_image.src;
    contentPage_description.innerHTML = posters[index3].description;
    contentPage_cast.innerHTML = posters[index3].cast;
}
function close_contentPage(){
    content_page.style.display = "none";
    //loop = setInterval("changeImage()",1000);;
}
function close_seatPage(){
    seat_page.style.display = "none";
}
function close_cartPage(){
    cart_page.style.display = "none";
}

window.onclick = function(event){
    if(event.target == content_page){
        close_contentPage();
    }else if (event.target == seat_page) {
        close_seatPage();
        close_contentPage();
    }else if (event.target == cart_page) {
        close_seatPage();
        close_contentPage();
        close_cartPage();
    }
}
//--------------------content page end--------------------
//--------------------seat page--------------------
function open_seatPage() {
    //seat_page.style.display = "block";
    seat_page.style.display = "inline";
}
function selectSeat(seatRow , seatCol){
    var name = 'seat';
    name+= seatRow;
    name+= seatCol;
    if(seatArray[seatRow-1][seatCol-1].isSeleted == false){
        seatArray[seatRow-1][seatCol-1].isSeleted = true;
        document.getElementById(name).className = 'changeToGreen';
    }else{
        seatArray[seatRow-1][seatCol-1].isSeleted = false;
        document.getElementById(name).className = 'changeToBlue';
    }
}
//--------------------seat page end--------------------
//--------------------cart page--------------------
function open_cartPage() {
    cart_page.style.display = "block";
    fillCart();
}
function fillCart(){
    //var cartItemDiv = document.getElementById("checkOutBoxLeft");
    //var totalPriceDiv = document.getElementById("totalPrice");
    var itemHTMl = "";
    var priceHTML  = "";
    var countTotal = 0.0;

    for(let i = 0 ; i<seatArray.length ; i++ ){
        for(let j=0 ; j<seatArray[i].length ; j++){
            if(seatArray[i][j].isSeleted == true){
                var seatNum = (i+1);
                var convertj = String.fromCharCode(65 + j) ;
                seatNum += convertj;
                itemHTMl += `<div class="ticketCard">`;
                itemHTMl += `<img class="ticketCardPic" src=`+ imgAddress + `>`; //src to be edit
                itemHTMl += `<p style="float:left;">` + movieName + `</p>`; //to be edit 
                itemHTMl += `<p style="float:right;">${seatNum}</p>`;

                itemHTMl +=`</div>`;

                countTotal += 10.0; //to change to ticket price;
            }
        }//end for
    }//end for

    priceHTML += `<p>$${countTotal.toFixed(2)}</p>`;
    priceHTML += `<p>$${(countTotal * 0.05).toFixed(2)}</p>`;
    priceHTML += `<p>$${(countTotal * 0.07).toFixed(2)}</p>`;
    priceHTML += `<p>$${((countTotal) * 1.12).toFixed(2)}</p>`;

    cartItemDiv.innerHTML = itemHTMl;
    totalPriceDiv.innerHTML = priceHTML;
}

function testCart(){
    var totalPriceDiv1 = document.getElementById("totalPrice");
    var priceHTML1  = "";
    var countTotal1 = 10.0;

    priceHTML1 += `<p>$${countTotal1.toFixed(2)}</p>`;
    priceHTML1 += `<p>$${(countTotal1 * 0.05).toFixed(2)}</p>`;
    priceHTML1 += `<p>$${(countTotal1 * 0.07).toFixed(2)}</p>`;
    priceHTML1 += `<p>$${((countTotal1) * 1.12).toFixed(2)}</p>`;

    totalPriceDiv1.innerHTML = priceHTML1;
}
//--------------------cart page end--------------------