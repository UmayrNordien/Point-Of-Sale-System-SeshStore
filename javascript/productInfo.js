let data = [
    {
        id: 1,
        productName: "Faded Purple CrewNeck",
        quantity: 2,
        size: "L",
        price: 600,
        image: "https://i.postimg.cc/P56qnJ4S/Crew-Neck-1.jpg"
    },
    {
        id: 2,
        productName: "Graphic Sweatshirt",
        quantity: 1,
        size: "L, XL",
        price: 699,
        image: "https://i.postimg.cc/L8tD8d7Y/Graphic-Sweat-Shirt-1.jpg"
    },
    {
        id: 3,
        productName: "Carhartt Bones-Jacket",
        quantity: 3,
        size: "M",
        price: 2200,
        image: "https://i.postimg.cc/1XzWTW5C/Carhartt-Bones-1.jpg"
    },
    {
        id: 4,
        productName: "Nike Purple FlameHoodie",
        quantity: 1,
        size: "M",
        price: 1800,
        image: "https://i.postimg.cc/tgNGGMpp/Nike-Purple-Flames.jpg"
    },
    {
        id: 5,
        productName: "Graphic SW Pants",
        quantity: 2,
        size: "L, XL",
        price: 1750,
        image: "https://i.postimg.cc/cCfd6Mnc/275834450-542228100497493-5314424466359396574-n.jpg"
    },
    {
        id: 6,
        productName: "Ski Mask",
        quantity: 6,
        size: "M",
        price: 666,
        image: "https://i.postimg.cc/DfDT3Nt3/Ski-Mask-1.jpg"
    },
]

localStorage.setItem('collection', JSON.stringify(data)) //takes a JavaScript object and transforms it into a JSON string
/* The setItem () method sets the value of the specified Storage Object item. 
The setItem () method belongs to the Storage Object */