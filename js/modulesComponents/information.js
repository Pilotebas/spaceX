export const informationRockets = async( description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/description.png")

     // Establecer el tamaño de la imagen usando atributos width y height
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    // h3.textContent = country
    h3.textContent = "Description: "
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)   

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}

export const idofrocket = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/cohete.svg")

     // Establecer el tamaño de la imagen usando atributos width y height
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "ID: "
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}


export const countryofrocket = async(country)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/country.svg")

     // Establecer el tamaño de la imagen usando atributos width y height
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket country: "
    let small = document.createElement('small');
    small.textContent = country
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}



export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/costo.png")

    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/fecha.png")
    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}


export const theheightofrocket = async (height) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/altura.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket height: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades meters y feet del objeto height
    small.textContent = `Meters: ${height.meters}, Feet: ${height.feet}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}


export const diameterofrocket = async (diameter) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/diametro.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket diameter: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades meters y feet del objeto height
    small.textContent = `Meters: ${diameter.meters}, Feet: ${diameter.feet}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}


export const massofrocket = async (mass) => {
    let div = document.createElement('div');
    div.classList.add('description__container');

    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/masa.svg");
    img.setAttribute("width", "50");
    img.setAttribute("height", "40");
    divFirst.append(img);

    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Rocket mass: ";

    let small = document.createElement('small');
    // Aquí accedemos a las propiedades kg y lb del objeto mass
    small.textContent = `Kilograms: ${mass.kg}, Pounds: ${mass.lb}`;
    divLast.append(h3, small);

    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item");
    description__item.append(div);
}







export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/info.png")

    img.setAttribute("width", "50"); 
    img.setAttribute("height", "40");

    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about this Rocket"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informacionCapsule = async(reuse_count, water_landings, land_landings, last_update, serial, estado, type, id)=>{
    let description__item = document.querySelector(".description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <h1><span>Reuse count: </span>${reuse_count}</h1>
        <h1><span>Water landings: </span>${water_landings}</h1>
        <h1><span>Land landings: </span>${land_landings}</h1>
        <h1><span>Last update: </span>${last_update}</h1>
        <h1><span>Serial: </span>${serial}</h1>
        <h1><span>Status: </span>${estado}</h1>
        <h1><span>Type: </span>${type}</h1>
        <h1><span>ID: </span>${id}</h1>    
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const informacionCore = async(reuse_count, rtls_attempts, rtls_landings, asds_attempts, serial, estado, last_update, id)=>{
    let description__item = document.querySelector(".description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <h1><span>Reuse count: </span>${reuse_count}</h1>
        <h1><span>Rtls attempts: </span>${rtls_attempts}</h1>
        <h1><span>Rtls landings: </span>${rtls_landings}</h1>
        <h1><span>Asds attempts: </span>${asds_attempts}</h1>
        <h1><span>Serial: </span>${serial}</h1>
        <h1><span>Status: </span>${estado}</h1>
        <h1><span>Last Update: </span>${last_update}</h1>
        <h1><span>ID: </span>${id}</h1>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const informacionCrew = async(name, agency, estado, id)=>{
    let description__item = document.querySelector(".description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <h1><span>Name: </span>${name}</h1>
        <h1><span>Agency: </span>${agency}</h1>
        <h1><span>Status: </span>${estado}</h1>
        <h1><span>ID: </span>${id}</h1>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const informationCompany = async(dic1, dic2, summary) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <h1><span>${summary}</span></h1>
        <h1><span>City: </span>${dic1.city}</h1>
        <h1><span>State: </span>${dic1.state}</h1>
        <h1><span>Address: </span>${dic1.address}</h1>
        <h1><span>Website: </span><a href="${dic2.website}">Website</a></h1>
        <h1><span>Flickr: </span><a href="${dic2.flickr}">Flickr</a></h1>
        <h1><span>Twitter: </span><a href="${dic2.twitter}">Twitter</a></h1>

    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Company = async(info0, info1, info2, info3, info4, info5, info6) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
    <h1><span>Name: </span>${info0}</h1>
    <h1><span>Founder: </span>${info1}</h1>
    <h1><span>Founded: </span>${info2}</h1>
    <h1><span>Employees: </span>${info3}</h1>
    <h1><span>Vehicles: </span>${info4}</h1>
    <h1><span>COO: </span>${info5}</h1>
    <h1><span>CTO Propulsion: </span>${info6}</h1>
     
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}


export const informacionRoadster = async (name, launch_date_utc, launch_mass_kg, launch_mass_lbs, norad_id, epoch_jd, orbit_type, apoapsis_au, periapsis_au, semi_major_axis_au, eccentricity, inclination, longitude, periapsis_arg, period_days, speed_kph, speed_mph, earth_distance_km, earth_distance_mi, mars_distance_km, mars_distance_mi, id) => {
    let description__item = document.querySelector(".description__item");
    let div = document.createElement("div");
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content += `
    <div class="containerComponente">
    <h1><span>Name: </span>${name}</h1>
    <h1><span>Launch Date (UTC): </span>${launch_date_utc}</h1>
    <h1><span>Launch Mass (kg): </span>${launch_mass_kg}</h1>
    <h1><span>Launch Mass (lbs): </span>${launch_mass_lbs}</h1>
    <h1><span>NORAD ID: </span>${norad_id}</h1>
    <h1><span>Epoch JD: </span>${epoch_jd}</h1>
    <h1><span>Orbit Type: </span>${orbit_type}</h1>
    <h1><span>Apoapsis (AU): </span>${apoapsis_au}</h1>
    <h1><span>Periapsis (AU): </span>${periapsis_au}</h1>
    <h1><span>Semi Major Axis (AU): </span>${semi_major_axis_au}</h1>
    <h1><span>Eccentricity: </span>${eccentricity}</h1>
    <h1><span>Inclination: </span>${inclination}</h1>
    <h1><span>Longitude: </span>${longitude}</h1>
    <h1><span>Periapsis ARG: </span>${periapsis_arg}</h1>
    <h1><span>Period (Days): </span>${period_days}</h1>
    <h1><span>Speed (kph): </span>${speed_kph}</h1>
    <h1><span>Speed (mph): </span>${speed_mph}</h1>
    <h1><span>Earth Distance (km): </span>${earth_distance_km}</h1>
    <h1><span>Earth Distance (mi): </span>${earth_distance_mi}</h1>
    <h1><span>Mars Distance (km): </span>${mars_distance_km}</h1>
    <h1><span>Mars Distance (mi): </span>${mars_distance_mi}</h1>
    <h1><span>ID: </span>${id}</h1>    
    </div>
`;
    div.innerHTML = content;
    description__item.append(div);
}
