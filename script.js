const contacts = [
    "Chris:2232322", "Sarah:3453456", "Bill:7654322", "Mary:9998769",
    "Dianne:9384975","John:1234567", "Emily:9876543", "Roseline:5678901",
    "Leah:1122334", "Michael:8765432", "Olivia:3344556", "Richard:9988776",
    "Sophia:4455667", "Robert:1122334", "Linda:5544332", "William:6677889",
    "Elizabeth:2233445", "Thomas:7788990", "Ava:1112233", "Charles:9900112",
    "Eleanor:3322114", "Mark:5544663", "Mia:6677883", "Joseph:1122330",
    "Chloe:9988772", "Promise:6655441", "Ella:2211009", "Jessica:9988775",
    "Liam:3322110", "Amelia:7799881", "Ryan:5544660", "Sophie:1122338",
    "Jackson:4455669", "Madison:9988774", "Ethan:8899221", "Lily:3344557",
    "Praise:6655443", "Peter:1122336", "Benjamin:4455662", "Aria:9988778",
    "David:2233449", "Victoria:6655447", "Aiden:9988779", "Evelyn:4455665",
    "Josephine:1122335", "Ferdinand:9988771", "Abigail:4455668", "Gabriel:1122337",
    "Scarlett:9988773", "Dylan:4455664", "Ariana:1122339", "Logan:9988770",
    "Hannah:4455661", "Alexander:1122331", "Sofia:9988777", "Owen:4455660",
    "Ellie:1122332", "Daniel:9988776", "Grace:4455663", "Anthony:1122333",
    "Zoe:9988775", "Nicholas:4455662", "Nora:1122334", "Jonathan:9988774",
    "Maya:4455661", "Brandon:1122335", "Hailey:9988773", "Andrew:4455664",
    "Avery:1122336", "Nathan:9988772", "Mila:4455665", "Samuel:1122337",
    "Simon:9988771", "Matthew:4455666", "Luna:1122338", "Tyler:9988770",
    "Emma:4455667", "Julian:1122339", "Aurora:9988769", "James:4455668",
    "Eva:1122330", "Lucas:9988768", "Layla:4455669", "Sebastian:1122331",
    "Nova:9988767", "Christopher:4455660", "Stella:1122332", "Elijah:9988766",
    "Piper:4455661", "Luke:1122333", "Zara:9988765", "Henry:4455662",
    "Ruby:1122334", "Victor:4458762", "Janet:1122333",
];

contacts.sort()


const para = document.querySelector(".para");
const input = document.querySelector("input");



input.addEventListener("input", () => {
    const searchName = input.value.toLowerCase();
    
    input.focus();
    para.style.visibility = "visible";

    para.textContent = "";


    for (let contact of contacts) {

        const splitContact = contact.split(":");

        if (splitContact[0].toLowerCase().startsWith(searchName)) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }

    }

    if (para.textContent === "" ) {
        para.textContent = "Contact not found.";
    } else if (input.value === "") {
        para.style.visibility = "hidden"; 
    }

});


input.addEventListener("blur", () => {

    if (input.value.trim().length > 1) {
        para.style.visibility = "visible"; 
    }
    else para.style.visibility = "hidden";
})

