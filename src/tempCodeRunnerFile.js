function analyseArtist(target, key, descriptor) {
}
let music = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _consultArtist_decorators;
    return _a = class music {
            constructor(numberCharts, title, artist) {
                this.numberCharts = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.numberCharts = numberCharts;
                this.title = title;
                this.artist = artist;
            }
            consultArtist() {
                return `O artista é: ${this.artist}`;
            }
        },
        (() => {
            _consultArtist_decorators = [analyseArtist];
            __esDecorate(_a, null, _consultArtist_decorators, { kind: "method", name: "consultArtist", static: false, private: false, access: { has: obj => "consultArtist" in obj, get: obj => obj.consultArtist } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();
const myMusic = new music(1, 'AMARGURA', 'Karol G');
myMusic.consultArtist();