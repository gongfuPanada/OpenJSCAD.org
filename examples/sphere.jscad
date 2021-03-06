// title: Sphere
// author: Rene K. Mueller
// date: 2013/04/26
// description: sphere, two kinds: 'normal' (default) and 'geodesic'

function main() {
   return [
      sphere({r: 10, fn: 18}).translate([15,-25,0]),
      sphere({r: 10, fn: 18, type: 'geodesic'}).translate([-15,-25,0]),

      sphere({r: 10, fn: 32}).translate([15,0,0]),
      sphere({r: 10, fn: 32, type: 'geodesic'}).translate([-15,0,0]),

      sphere({r: 10, fn: 32}).scale([0.5,1,2]).translate([15,25,0]),
      sphere({r: 10, fn: 32}).scale([0.5,2,1]).translate([30,25,0]),
      sphere({r: 10, fn: 32, type: 'geodesic'}).scale([0.5,1,2]).translate([-15,25,0]),
      sphere({r: 10, fn: 32, type: 'geodesic'}).scale([0.5,2,1]).translate([-30,25,0]),
   ];
}


