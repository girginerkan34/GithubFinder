import { Gitub } from "./github.js";
import { UI } from "./ui.js";


// class'ın öörneğini oluşturma
const github = new Gitub();
const ui = new UI();

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const themeBtn = document.querySelector('#theme-btn')
const body = document.querySelector('body');


// ! Olay izleyicileri
searchButton.addEventListener('click' , getInput);
themeBtn.addEventListener('click', changeTheme)


// ! Metodlar

function getInput(){
    // arama terimi dolu ise
    if(searchInput.value) {
        github
        .fetchUserData(searchInput.value)
        .then((res) => {
            // eğer kullanıcı bulunamadıysa
            if(res.data.message === 'Not Found') {
                ui.showAlert("Aradığınız kullanıcı bulunamadı", "alert-info")
            } else {
                // Kullannıcı bulunduysa
                ui.showAlert("Aradığınız kullanıcı başarıyla bulundu")
                ui.renderProfile(res.data);
                ui.renderProjects(res.repos)
            }
        })
        .catch((err) => console.log(err));

        return;

    }
   

    // Arama terimi boş ise 

    ui.showAlert('Lütfen isim giriniz..', 'alert-primary');
}

// Temayı değiştirir
function changeTheme(){
    // Arka planı değiştirme
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');

    if(body.classList.contains("bg-dark")){
  themeBtn.innerHTML = "Açık Mod";
    }else{
        themeBtn.innerText = 'Koyu Mod';
    }

}