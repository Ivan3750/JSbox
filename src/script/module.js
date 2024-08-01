const themebox = document.querySelector(".section__theme");
fetch(`/api/themes/${location.pathname.substring(location.pathname.lastIndexOf("/") + 1)}`)
.then(response => response.json())
.then(data => {

    if (Array.isArray(data.modules)) {
        data.modules.forEach(module => {
            if (Array.isArray(module.topics)) {
                module.topics.forEach((topic, index) => {
                    themebox.innerHTML += `
                        <div class="theme">
                            <h2 class="theme-name">${topic.title}</h2>
                            <p>${topic.description}</p>
                            <div class="theme-links"> 
                                ${topic.files.map(file => `
                                    <a href="${file.url}" download class="theme-download" aria-label="Download ${file.description}">Download</a>
                                    <a href="${file.url}" class="theme-view" aria-label="View ${file.description}">View</a>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });

                // Attach event listeners after all HTML is inserted
                document.querySelectorAll(".theme-name").forEach((element, index) => {
                    element.addEventListener("click", () => {
                        sessionStorage.setItem("IndexTheme", index);
                    });
                });
            } else {
                console.error('Expected topics to be an array');
            }
        });
    } else {
        console.error('Expected modules to be an array');
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});
/* 

    window.addEventListener("load", function(){
        const TOKEN = "6917599115:AAHucfqNurqLNO2C5rSSaKTJmCQZaaQDA10"
const CHAT_ID = "-1002054812213";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const btnSubmit = document.querySelector('.btn__submit');

let message = `<b>Вхід на сайт</b>\n`;
axios.post(URI_API, {
  chat_id: CHAT_ID,
  parse_mode: "html",
  text: message
  });



    })

  .catch(error => {
    // Обробляємо помилки
    console.error('Помилка при отриманні JSON:', error);
  });
 */
