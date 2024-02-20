import middleware from '../pages/api/middleware';

export default async function handler(req, res) {
  await middleware(req, res);
  return <h1>TOPページですよ!!!</h1>;
  // この後の処理を記述します
}
