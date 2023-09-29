const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = canvas.width = window.innerWidth - 5;  
const height = canvas.height = window.innerHeight - 5;

export const World = {
    count: 0,
    width,
    height,
    context,
    distanceTraveled: 0,
    isGameover: false,
}