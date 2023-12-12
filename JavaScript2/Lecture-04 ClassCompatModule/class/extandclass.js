// Parent class
class Media {
    constructor(into){
        this.publishDate = into.publishDate;
        this.name = into.name;
    }
}

//Child class
class Song extends Media{
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong);