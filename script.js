let btn = document.getElementById("button")
btn.addEventListener("click", fetchData);

async function fetchData () {

    let have = document.getElementById('fromCurrency').value
    let want = document.getElementById('toCurrency').value
    let amount = document.getElementById('Old_Currency').value
    
    // Check if Amount is empty or less than 0
   if (amount == "" || amount < 0.01){
    document.getElementById('Output').innerHTML = "Please enter a valid positive number"
    document.getElementById('Emoji1').innerHTML = "&#10060;"
    document.getElementById('Emoji2').innerHTML = "&#10060;"
    }

    else{
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[Secret]',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
            document.getElementById('Output').innerHTML = result.new_amount
            document.getElementById('Emoji1').innerHTML = "&#128176;"
            document.getElementById('Emoji2').innerHTML = "&#128176;"
        }
        catch (error) {
        console.error(error);
    }
}
}
