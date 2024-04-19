const filters = [
    {
        title:"Expertise",
        optn1:"skin",
        optn2:"fertility",
        optn3:"heart",
        optn4:'ent',
        optn5:'gynecology',
    },{
        title:"Gender",
        optn1:"Male",
        optn2:"Female",
        optn3:"Neutral",
        optn4:'',
        optn5:'',
    },{
        title:"Fees",
        optn1:`₹499`,
        optn2:"₹999",
        optn3:"₹1599",
        optn4:'₹1999',
        optn5:'₹2599',
    },{
        title:"Languages",
        optn1:"Telugu",
        optn2:"English",
        optn3:"Tamil",
        optn4:'Hindi',
        optn5:'Kannada',
    }
]

const doctorsList = [
    {
        name: "Dr. Prerna Narang",
        image:"https://res.cloudinary.com/dgga8cymk/image/upload/v1713512817/Amrutam/Page-2/dr_prerna.png",
        id: "prerna1",
        rating: "4.5",
        specialty:"Male-Female Infertility",
        experience:"7 years of Experience",
        languages:"Speaks: English, Hindi, Marathi",
        videoFee:"800",
        chatFee:"Free",
    },
    {
        name: "Dr. Bruce Willis",
        image:"https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
        id: "bruce2",
        rating: "4.7",
        specialty:"Gynecologist",
        experience:"14 years of Experience",
        languages:"Speaks: English, Telugu, Hindi",
        videoFee:"699",
        chatFee:"Free",
    },
    {
        name: "Dr. Amrutha Sherma",
        image:"https://res.cloudinary.com/dgga8cymk/image/upload/v1713521596/Amrutam/Page-2/dr_Bruce.png",
        id: "amrutha3",
        rating: "4.9",
        specialty:"Ayurveda Practitioner(BAMS,MD)",
        experience:"24 years of Experience",
        languages:"Speaks: English, Telugu, Tamil",
        videoFee:"1199",
        chatFee:"₹299",
    }
]

export {filters, doctorsList}