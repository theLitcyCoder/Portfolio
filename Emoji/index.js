const myEmojis = ["👨‍💻", "⛷", "🍲"]

const emojis = document.getElementById('emojiContainer')

const input = document.getElementById('emoji-input')
const btn = document.getElementById('push-btn')
const unshift = document.getElementById('shift-btn')
const removeB = document.getElementById('rmbeginning-btn')
const removeE = document.getElementById('rmend-btn')




function renderEmojis ()
{ 
    for(let i = 0; i < myEmojis.length; i++)
    {
        const emo = document.createElement('span');
        emo.textContent = myEmojis[i]
        emojis.append(emo)
    }
}


renderEmojis()

btn.addEventListener('click', () => {
    if(input.value)
    {
        myEmojis.push(input.value)
        input.value = ""
        emojis.innerHTML= ""
        renderEmojis()
    }
})


unshift.addEventListener('click', () => {
    if(input.value)
    {
        myEmojis.unshift(input.value)
        input.value = ""
        emojis.innerHTML= ""
        renderEmojis()
    }
})


removeB.addEventListener('click', () => {
        myEmojis.shift()
        input.value = ""
        emojis.innerHTML= ""
        renderEmojis()
})

removeE.addEventListener('click', () => {
    myEmojis.pop()
    input.value = ""
    emojis.innerHTML= ""
    renderEmojis()
})
