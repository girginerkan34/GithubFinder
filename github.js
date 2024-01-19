export class Gitub {
  // istek atmak için gerekli bilgiler
  constructor() {
    this.client_id='8570964b0e04d1c56e2c';
    this.client_secret ='fd56c06a3eb3bc5a0e92b6935127069305a82c28';
    this.per_page= 10
    this.sort= "asc"
  }

  // api'den kullanıcı bilgilerini alma
  async fetchUserData(username) {
    // Parametre olarak gelen kullanıcı ismine göre istek attık
    const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );
//  Kullanıcının Projelerini Alma
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    )



    // Gelen cevabı json verisine çevirme
    const data = await profileRes.json();
    const repos = await repoRes.json()

    
  //  fonksiyonun çağrıldığı yere bilgileri gönderme
    return {data, repos};
  }
}
