const currentyear = document.querySelector("#currentyear");
const year = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
currentyear.innerHTML = `${year}`;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Meridian Idaho Temple",
        location: "Meridian, Idaho, United States",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65841-main.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-65241-main.jpg"
    },
    {
        templeName: "Sacramento California Temple",
        location: "Rancho Cordova, California, United States",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-8098-main.jpg"
    }
];

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const heading = document.querySelector('h2');

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    heading.classList.toggle("open");
});



function createTempleCard(templeList) {
    document.querySelector("#pic").innerHTML = "";
    templeList.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let loc = document.createElement("p");
        let start = document.createElement("p");
        let size = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        loc.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        start.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(loc);
        card.appendChild(start);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector("#pic").appendChild(card);



    })
}

const oldTempleLink = document.querySelector("#oldtemple");

oldTempleLink.addEventListener("click", () => {
    let oldTemple = temples.filter((temple) => (parseInt(temple.dedicated.substring(0, 4)) < 1900))
    createTempleCard(oldTemple);
});

const newTempleLink = document.querySelector("#newtemple")
newTempleLink.addEventListener("click", () => {
    let newTemple = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000)
    createTempleCard(newTemple);
});

const largeTempleLink = document.querySelector("#largetemple")
largeTempleLink.addEventListener("click", () => {
    let largeTemple = temples.filter(temple => temple.area > 90000)
    createTempleCard(largeTemple);
});

const smallTempleLink = document.querySelector("#smalltemple")
smallTempleLink.addEventListener("click", () => {
    let smallTemple = temples.filter(temple => temple.area < 10000)
    createTempleCard(smallTemple);
});

const homeTempleLink = document.querySelector("#home")
homeTempleLink.addEventListener("click", () => {
    createTempleCard(temples);
});

document.onload = createTempleCard(temples);