let apiData = [];

let apiURL = "https://api.airtable.com/v0/appqYeV19KsEEIQvG/Table%201?api_key=keyJ52T8zGbtWE7if";

let colorShows = [];

const select_menu = document.getElementById("color_show_select");
const image_container = document.getElementById("image_container");
const color_button = document.getElementById("change_border_color");

//only to request data from the api
async function fetchData(url){
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

//which will also push data into apiData[] to make it more usable
async function getData(){
    let data = await fetchData(apiURL);

    for(let i = 0; i<data.records.length; i++){
        let record = data.records[i].fields;
        apiData.push(record);
    }

    console.log(apiData);
    // makeDropdown();
  
    select_menu.addEventListener('change', function selectShow(event){
        imageSearch();
        console.log("successfully searched");
    })

//     select_memu.addEventListener("change", function selectShow(event)
//         imageSearch();
//         console.log("successfully searched");
// })

color_button.addEventListener('click', function changeColor(event){

    document.querySelector("img").style.borderColor = "red";
    })
}
getData();

btn = document.getElementById('Red');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = '#FF4A4A';

  // 👇️ optionally change text color
  // document.body.style.color = 'white';

})

btn = document.getElementById('Orange');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#FFB65A';
})

btn = document.getElementById('Yellow');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#FFF143';
})

btn = document.getElementById('Green');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#C2F68A';
})

btn = document.getElementById('Blue');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#6DDBFE';
})

btn = document.getElementById('Purple');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#B07EEF';
})

btn = document.getElementById('Pink');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#FF74C6';
})

btn = document.getElementById('Black');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#3E3E3E';
})

// function makeDropdown(){
//     //iterate over all the description (colorShows)
//     for(let i = 0; i<apiData.length; i++){
//         let showName = apiData[i].color;
//         colorShows.push(showName);
//     };
//     colorShows = removeDuplicates(colorShows);
//     console.log(colorShows);
//     //for every show in colorShows, add a new option in the select menu
//     colorShows.forEach(element => {
//         let new_option = document.createElement("button");
//         new_option.className = "option";
//         new_option.innerHTML = element;
//         new_option.value = element;
//         select_menu.appendChild(new_option);
//         // new_option.addEventListener("click", ()=>{imageSearch()})
//     });
// }





function removeDuplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
function imageSearch(select_menu){
    // console.log(select_menu.value);
    //filter
    const results = apiData.filter((entry) => {
        const showNameMatch = entry.color.includes(select_menu.value);
        return showNameMatch;
    });
    renderSortedImages(results,image_container);
}
function colorSearch(id){
    let button = document.getElementById(id);
    console.log(button.value);
    //filter
    const results = apiData.filter((entry) => {
        const showNameMatch = entry.color.includes(button.value);
        return showNameMatch;
    });
    renderSortedImages(results,image_container);
}
function renderSortedImages(sortedData, container){
    container.innerHTML = "";
    sortedData.forEach((entry, index) => {
        const image = document.createElement("img");
        image.src = entry.image[0].url;
        image.id = "color_images";
        container.appendChild(image);
    })
}

  (function emojiCursor() {
    
      var possibleEmoji = ["❤️", "🧡", "💛", "💚", "💙", "💜", "💗", "🖤"]
      var width = window.innerWidth;
      var height = window.innerHeight;
      var cursor = {x: width/2, y: width/2};
      var particles = [];
      
      function init() {
        bindEvents();
        loop();
      }
      
      // Bind events that are needed
      function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchstart', onTouchMove);
        
        window.addEventListener('resize', onWindowResize);
      }
      
      function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      
      function onTouchMove(e) {
        if( e.touches.length > 0 ) {
          for( var i = 0; i < e.touches.length; i++ ) {
            addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
          }
        }
      }
      
      function onMouseMove(e) {    
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        
        addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
      }
      
      function addParticle(x, y, character) {
        var particle = new Particle();
        particle.init(x, y, character);
        particles.push(particle);
      }
      
      function updateParticles() {
        
        // Updated
        for( var i = 0; i < particles.length; i++ ) {
          particles[i].update();
        }
        
        // Remove dead particles
        for( var i = particles.length -1; i >= 0; i-- ) {
          if( particles[i].lifeSpan < 0 ) {
            particles[i].die();
            particles.splice(i, 1);
          }
        }
        
      }
      
      function loop() {
        requestAnimationFrame(loop);
        updateParticles();
      }
      
      /**
       * Particles
       */
      
      function Particle() {
    
        this.lifeSpan = 120; //ms
        this.initialStyles ={
          "position": "absolute",
          "display": "block",
          "pointerEvents": "none",
          "z-index": "10000000",
          "fontSize": "16px",
          "will-change": "transform"
        };
    
        // Init, and set properties
        this.init = function(x, y, character) {
    
          this.velocity = {
            x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
            y: 1
          };
          
          this.position = {x: x - 10, y: y - 20};
    
          this.element = document.createElement('span');
          this.element.innerHTML = character;
          applyProperties(this.element, this.initialStyles);
          this.update();
          
          document.body.appendChild(this.element);
        };
        
        this.update = function() {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          this.lifeSpan--;
          
          this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
        }
        
        this.die = function() {
          this.element.parentNode.removeChild(this.element);
        }
        
      }
      
      /**
       * Utils
       */
      
      // Applies css `properties` to an element.
      function applyProperties( target, properties ) {
        for( var key in properties ) {
          target.style[ key ] = properties[ key ];
        }
      }
      
      init();
    })();