const calculateTemp = ()=>{

    const numTemp = document.getElementById('temp').value;

    const tempselec = document.getElementById('temp_diff');
    const tempval = tempselec.options[tempselec.selectedIndex].value;
    // console.log(tempval);

    const celToFar= (cel) =>{
        let fahrenheit = ((cel*9/5)+32);
        return fahrenheit;
    }
    
    
    const farToCel= (far) =>{
        let celcius = ((far-32)*9/5);
        return celcius;
    }

    let result ;

    if(tempval == 'cel'){
        result = celToFar(numTemp)  ;
        document.getElementById('resultbox').innerHTML = `${result} Fahrenheit`;
    }
    else{
        result = farToCel(numTemp)  ;
        document.getElementById('resultbox').innerHTML = `${result}°Celcius`;
    }

}