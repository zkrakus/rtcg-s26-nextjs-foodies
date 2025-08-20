import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals(){
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay to test pending/loading

  //throw new Error('Loading meals failed.'); // For testing error handling
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(){
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}