const themebox = document.querySelector(".section__theme")
fetch('../script/data.json')
.then(response => response.json())
.then(data => {
    for(let  i = data.length; i != 0; i--){
        themebox.innerHTML += `
        <a href="./pages/info.html">
        <h2 class="theme-name">1 Знайомство з JS. Змінні. Типи даних. Взаємодія з користувачем</h2>
        </a>
        `
    }
    const themename = document.querySelectorAll(".theme-name")
    themename.forEach((element, index) => {
        console.log(data[index].title)
        element.innerHTML =  data[index].title
        element.addEventListener("click",()=>{
            sessionStorage.setItem("IndexTheme", index);
        })
    });



























  })
  .catch(error => {
    // Обробляємо помилки
    console.error('Помилка при отриманні JSON:', error);
  });

