
    async function compute() {
        if(document.getElementById('radio1').checked === true){
            let data_cipher = {
                cipher_shift: parseInt(document.getElementById('shift').value),
                to_be_ciphered_text: document.getElementById('subject').value
            }
            let response = await encrypt(data_cipher)
            document.getElementById('result').innerHTML = response.result
        }else if (document.getElementById('radio2').checked === true){
            let data_decipher = {
                cipher_shift: parseInt($('#shift').val()),
                ciphered_text: $('#subject').val()
            }
            let response = await decrypt(data_decipher)
            document.getElementById('result').innerHTML = response.result
        }




    }


async function encrypt(data) {
    let response = await fetch('https://fois-rest.herokuapp.com/api/cipher',
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    return await response.json()
}
async function decrypt(data){
    let response = await fetch('https://fois-rest.herokuapp.com/api/decipher',
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    return await response.json()
}


