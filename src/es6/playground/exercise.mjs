import getData from './api.mjs';
export async function solution() {
  const res = await getData();
  return console.log(res);// Tu código aquí 👈
}
solution()