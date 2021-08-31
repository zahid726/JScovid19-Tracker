let btn1=document.querySelector('.btn-1')
window.addEventListener('load', showItem1)
let select= document.getElementById('select');

function showItem1(){
  let countries = fetch( 'https://api.covid19api.com/summary').then(response=> response.json()).then(data=>{

 
  data.Countries.forEach(countryName => {
    // console.log(countryName)
   
    select.innerHTML+=`
    <option value= ${countryName.CountryCode}>${countryName.Country}</option>
    
    `
   
    
    // Global Data

    let GlobalOutput= `
      
       <h2>Global Covid19 Situation</h2>
       
      <ul>
      <li><span>New Confirmed :    </span> ${data.Global.NewConfirmed}</li>
      <li><span>Total Confirmed :  </span>${data.Global.TotalConfirmed}</li>
      <li><span>NewDeaths :        </span>${data.Global.NewDeaths}</li>
      <li><span>Total Deaths :     </span>${data.Global.TotalDeaths}</li>
      <li><span>New Recoverd :     </span>${data.Global.NewRecovered}</li>
      <li><span>Total Recoverd :    </span>${data.Global.TotalRecovered}</li>
     


      </ul>
         
      
       `
       document.querySelector('.left').innerHTML=GlobalOutput;
       let selected= document.querySelector('#select');
       selected.addEventListener('click',function(){
         console.log(this.value)
     
         if(this.value===countryName.CountryCode){
           console.log(countryName.NewConfirmed)
             // Selected Country Data
 
   document.querySelector('.right').innerHTML =
 
   `
     
      <h2>${countryName.Country}</h2>
      
     <ul>
     <li><span>New Confirmed :    </span> ${countryName.NewConfirmed}</li>
     <li><span>Total Confirmed :  </span>${countryName.TotalConfirmed}</li>
     <li><span>NewDeaths :        </span>${countryName.NewDeaths}</li>
     <li><span>Total Deaths :     </span>${countryName.TotalDeaths}</li>
     <li><span>New Recoverd :     </span>${countryName.NewRecovered}</li>
     <li><span>Total Recoverd :    </span>${countryName.TotalRecovered}</li>
    


     </ul>
        
     
      `
         }
       })
  });


      
  })
    
}
