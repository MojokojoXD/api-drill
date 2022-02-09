const button = document.querySelector('button');
const div = document.querySelector('div');

const consoleLog = () => {
    console.log("Button Clicked")
    axios.get('http://swapi.dev/api/planets/2').then((res) => {
        for (let i = 0; i < res.data.residents.length;i++)
        {
            axios.get(`${res.data.residents[i]}`).then((residentRes) => {       
                const h2Elements = document.createElement('h2');
                h2Elements.textContent = residentRes.data.name;
                div.appendChild(h2Elements);
            })
        }
    })
};

button.addEventListener('click',consoleLog);