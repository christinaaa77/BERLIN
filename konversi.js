const celsius = {
    celcius : 37.33,
};
const display = ({celcius}) => {
    console.log(`Fahrenheit ${celcius * 9/5 + 32} = ${celcius} celsius`);
};

export {celsius, display}; //contoh export biasa yang bisa export satu persatu