fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      document.body.innerHTML += `<img src=${item.image} />`
    });
  })