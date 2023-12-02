
  function Circle(radius) {
    this.radius = radius;
  }
  
  const myCircle = new Circle(5);

  function calculateCircleArea(myCircle) {
    const area = Math.PI * Math.pow(myCircle.radius, 2);
    return area;
  }
  
  console.log('Radius of the circle:', myCircle.radius);
  console.log('Area of the circle:', calculateCircleArea(myCircle));
