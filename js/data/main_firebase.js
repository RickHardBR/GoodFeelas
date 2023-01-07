import { sendToGodfellas } from './goodfellas.js';

    const visitedName = document.getElementById('visitedName')
    const visitedEmail = document.getElementById('visitedEmail')
    const visitedTelephone = document.getElementById('visitedTelephone')
    const visitedMessage = document.getElementById('visitedMessage')
    
    const btnToSend = document.getElementById('btnToSend')

    btnToSend.addEventListener('click', async () => {
        const toSend = {
            name: visitedName.value,
            email: visitedEmail.value,
            telephone: visitedTelephone.value,
            message: visitedMessage.value
        }

        const toSendId = await sendToGodfellas(toSend)

        window.alert('Mensagem enviada com sucesso!')
        
        visitedName.value = ''
        visitedEmail.value = ''
        visitedTelephone.value = ''
        visitedMessage.value = ''

    })