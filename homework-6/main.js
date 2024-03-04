let find_songs_artist = (songs, artist) => {
    let result = [];
    for (let song of songs) {
        if (song.artist === artist) {
            result.push(song.title)
        }
    }
    for (let song of result) {
        console.log(song);
    }
}



let songs = [
    { title: "Вечно молодой", artist: "Валерий Меладзе" },
    { title: "Охота", artist: "Noize MC" },
    { title: "Наталия", artist: "СЕРЕГА ПИРАТ" },
    { title: "Зимняя", artist: "Кровосток" },
    { title: "Качалка", artist: "СЕРЕГА ПИРАТ" },
    { title: "Простые слова", artist: "Кровосток" },
    { title: "Кислотный дождь", artist: "Noize MC" },
    { title: "Black Siemens", artist: "PHARAOH" }
];


let artist = prompt('Введите имя артиста');
find_songs_artist(songs, artist)