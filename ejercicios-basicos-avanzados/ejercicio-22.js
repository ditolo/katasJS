/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de 
frutas. 
Recuerda no usar frutas duplicadas. 
Finalmente, imprime el array resultante. */
const fruits = ["Strawberry", "Banana", "Orange", "Apple"]; 
 
const foodSchedule = [ 
  { name: "Heura", isVegan: true }, 
  { name: "Salmon", isVegan: false }, 
  { name: "Tofu", isVegan: true }, 
  { name: "Burger", isVegan: false }, 
  { name: "Rice", isVegan: true }, 
  { name: "Pasta", isVegan: true }, 
]; 

function replaceNonVeganMeals(meals, fruits) {
    let fruitIndex = 0;
    for (meal of meals) {
        if (!meal.isVegan) {
            meal.name = fruits[fruitIndex];
            meal.isVegan = true;
            fruitIndex++;
            if (fruitIndex >= fruits.length) fruitIndex = 0;
        }
    }
    console.log(meals);
}
replaceNonVeganMeals(foodSchedule, fruits);