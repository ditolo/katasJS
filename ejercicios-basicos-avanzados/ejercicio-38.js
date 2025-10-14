/* Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos 
favoritos que tienen los usuarios. 
Es decir, la media de volumen de todos los volumenes juntos. */
const users = [ 
  { 
    name: "Alberto", 
    favoritesSounds: { 
      waves: { format: "mp3", volume: 50 }, 
      rain: { format: "ogg", volume: 60 }, 
      firecamp: { format: "mp3", volume: 80 }, 
    }, 
  }, 
  { 
    name: "Antonio", 
    favoritesSounds: { 
      waves: { format: "mp3", volume: 30 }, 
      shower: { format: "ogg", volume: 55 }, 
      train: { format: "mp3", volume: 60 }, 
    }, 
  }, 
  { 
    name: "Santiago", 
    favoritesSounds: { 
      shower: { format: "mp3", volume: 50 }, 
      train: { format: "ogg", volume: 60 }, 
      firecamp: { format: "mp3", volume: 80 }, 
    }, 
  }, 
  { 
    name: "Laura", 
    favoritesSounds: { 
      waves: { format: "mp3", volume: 67 }, 
      wind: { format: "ogg", volume: 35 }, 
      firecamp: { format: "mp3", volume: 60 }, 
    }, 
  }, 
];

const averageVolume = (userList) => {
    let totalAverage=0;
    let counter =0;
    for (user of userList){
            for (sound in user.favoritesSounds){
                totalAverage+=(user.favoritesSounds[sound].volume)
                counter++;}}
        console.log(totalAverage + " "+ counter)
        return totalAverage/counter
    }
console.log(averageVolume(users))