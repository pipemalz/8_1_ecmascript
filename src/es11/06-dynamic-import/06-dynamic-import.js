const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const module = await import('./module.js');
    console.log(module)
    module.hello()
        .then(res => console.log(res))
        .catch(err => console.log(err));
});
