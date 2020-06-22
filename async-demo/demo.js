const crayon = require('./crayon');

async function demo() {
  try {
    const startTime = new Date()
    await crayon('magenta', 'Eat a BLT');
    await crayon('cyan', 'Eat a Reuben');
    await crayon('green', 'Eat a Cuban');
    await crayon('red', 'Eat a PB&J');
    await crayon('white', 'Eat a Grilled Cheese');
    await crayon('yellow', 'Eat a Tuna Melt');
    console.log("NOW THE'RE ALL DONE! IT TOOK", new Date() - startTime);
    // await crayon('orange', 'Eat a Toasted Avocado');
  } catch (err) {
    console.error(err)
  }
}

demo();
