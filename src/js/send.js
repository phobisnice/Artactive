import message from './message';

export default function (url, data) {
  return fetch(url, {
    method: 'POST',
    body: data
  }).then(res => {
    const text = res.ok ? `Сообщение успешно отправлено` : `Произошла ошибка: ${res.status}`;
    message(text);
  }).catch(error => {
    message(error);
  })
}
