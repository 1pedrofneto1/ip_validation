const validating_ip = () => {
    //Receiving user IP
    let user_ip = window.document.querySelector('input#input_ip').value
    //IP block divisions and validate the number of characters
    if(user_ip.length == 12 || user_ip.length == 7){  
        let block_separation = user_ip.split('.', 4)
        let first_block = block_separation[0]
        let second_block = block_separation[1]
        let third_block = block_separation[2]
        let fourth_block = block_separation[3]
        //Return error if IP has a leading zero
        if(first_block[0] == 0 || second_block[0] == 0 || third_block[0] == 0 || fourth_block[0] == 0){
            window.document.querySelector('div#result').innerHTML = ""
            window.alert('Invalid IP! Your ip cannot have a leading zero')
        }
        //If the IP is correct, return IP valid
        else if(first_block.length == 3 && second_block.length == 2 && third_block.length == 2 && fourth_block.length == 2 || first_block.length == 1 && second_block.length == 1 && third_block.length == 1 && fourth_block.length == 1){
            first_block = Number(first_block)
            second_block = Number(second_block)
            third_block = Number(third_block)
            fourth_block = Number(fourth_block)
            //Validate IP to not contain letters
            if(isNaN(first_block) || isNaN(second_block) || isNaN(third_block) || isNaN(fourth_block)){
                window.document.querySelector('div#result').innerHTML = ""
                window.alert('Invalid IP! Your IP cannot contain letters!')
            }   
            //Validating IP not to be greater than 255 or less than 0  
            else if(first_block > 255){
                window.document.querySelector('div#result').innerHTML = ""
                window.alert('Invalid IP! Your first IP block cannot go beyond 255')
            }
            else if(first_block >= 0 || first_block <= 255){
                let result = window.document.querySelector('div#result')
                result.innerHTML = "IP Valid"
                result.style.color = "rgb(27, 216, 27)"
            }
            else{
                window.document.querySelector('div#result').innerHTML = ""
                window.alert('Invalid IP! Your ip cannot contain block less than 0')
            }
        }
        else{
            window.document.querySelector('div#result').innerHTML = ""
            window.alert('Invalid IP! Unformatted IP')
        }
    }
    //Returning error to the user, in case the general number of characters of the IP is wrong
    else{
        window.document.querySelector('div#result').innerHTML = ""
        window.alert('Invalid IP! Your IP must be 12 or 7 characters long (counting the dots ("."))')
    }
}
