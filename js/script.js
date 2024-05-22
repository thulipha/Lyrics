let functions ={
    getitem: ()=>{
        const lyrics = document.querySelector("#lyrics");
        return lyrics;
    },
    search:(artist, song)=>{
        let ajax = new XMLHttpRequest();
        const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;


        ajax.open("get", url, false);
        ajax.send();
        if(ajax.readyState == 4 && ajax.status == 200){
            let response = JSON.parse(ajax.response);
            return this.lyrics.innerHTML = response.lyrics;
        };
        if(ajax.readyState == 4 && ajax.status == 404){
            return this.lyrics.innerHTML = "Ops... Artist or Song not found!!";
        };
    },

    easteregg:()=>{
        return this.lyrics.innerHTML = 'Por acaso tu faz musica Liriel??  Volte a trabalhar';
    }
};

function getLyrics(){
    const form = document.querySelector("#lyrics_form");
    const artist = document.querySelector("#artist_search");
    const song = document.querySelector("#song_search");
    const art_name = document.querySelector("#artist_name");
    const sng_name = document.querySelector("#song_name");

    form.addEventListener('submit', e => {
        e.preventDefault();
        if(artist.value.toLowerCase() == "liriel" && song.value.toLowerCase() == "anacleto"){
            functions.easteregg();
        }
        else{
            functions.search(artist.value, song.value);
            art_name.innerHTML = artist.value;
            sng_name.innerHTML = song.value;
        };
    });
};
getLyrics();