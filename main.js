

; (function(){
    //player Name
    let player1 = 'Player1'
    let player2 = 'Player2'
  
    function editNames() {
     
   
        player1 = prompt("Change Player 1 Name")
        player2 = prompt("Change Player 2 Name")
        if (player1.length < 1 || player2.length < 1) {
 
            alert('Please enter a valid name')
            return;
        }
        // Capitalize the first letter of each name
        player1 = player1.charAt(0).toUpperCase() + player1.slice(1).toLowerCase()
        player2 = player2.charAt(0).toUpperCase() + player2.slice(1).toLowerCase()
   
        document.querySelector("p.Player1").innerHTML = player1
        document.querySelector("p.Player2").innerHTML = player2
    }
  
    function rollTheDice() {
        let diceNum1 = document.querySelector('.img1')
        let diceNum2 = document.querySelector('.img2')
 
        diceNum1.setAttribute('src', 'diceroll.gif')
        diceNum2.setAttribute('src', 'diceroll.gif')
        let result = document.querySelector('h1')
        result.innerHTML = ''
 
        setTimeout(() => {
            let randomNum1 = Math.floor(Math.random() * 6) + 1
            let randomNum2 = Math.floor(Math.random() * 6) + 1
         
            diceNum1.setAttribute('src', 'dice' + randomNum1 + '.png')
            diceNum2.setAttribute('src', 'dice' + randomNum2 + '.png')
            //determine the winner
            if (randomNum1 === randomNum2) {
                result.innerHTML = 'Draw'
            } else if (randomNum1 > randomNum2) {
                result.textContent = (player1 + 'Wins!')
            } else {
                result.textContent = (player2 + 'Wins!')
            }
        }, 2500)
    }
 
    function resetInput() {
        // Reset player names to default
        player1 = 'Player1'
        player2 = 'Player2'
      
        // Clear dice images
        let diceNum1 = document.querySelector('.img1')
        let diceNum2 = document.querySelector('.img2')
      
     
      
        // Clear the result text
        let result = document.querySelector('h1')
        result.innerHTML = ''
  
        // Reset player names displayed
        document.querySelector("p.Player1").innerHTML = player1
        document.querySelector("p.Player2").innerHTML = player2
    }
 
    let reset_btn = document.querySelector('.reset_btn')
         
    reset_btn.addEventListener('click', (evt) => {
        evt.preventDefault()
        resetInput()
 
    })
  
    editNames()
  rollTheDice()


})()
 
 



   