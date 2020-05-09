axios.get('https://swapi.dev/api/planets')
.then(({ data }) => {
    console.log(data);
});