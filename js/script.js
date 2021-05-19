/* Descrizione:
Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
- testo
- "completed", un booleano settato inizialmente a false.
Stampare in pagina un item per ogni elemento della to-do list.
Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
*/

var app = new Vue(
    {
        el: "#root",
        data: {
            lista: [
                {
                    testo: "Fare la spesa",
                    completato: false
                },
                {
                    testo: "Studiare Vue.js",
                    completato: false
                },
                {
                    testo: "Andare in palestra",
                    completato: false
                },
                {
                    testo: "Andare dal dentista",
                    completato: false
                }
            ],
            nuovoElemento: "",
            nuovaClasse: "stext-decoration: line-through"
        },
         methods: {
            rimuovereElemento: function(newIndex) {
                //console.log("newIndex");
                this.lista.splice(newIndex, 1);
            },
            aggiungereElemento: function(){
                //console.log("ho cliccato");
                //aggiungere controllo
                this.lista.push({
                    testo: this.nuovoElemento,
                    completato: false
                });
                this.nuovoElemento = "";
            },
            cambioCompletato: function(index){
                //console.log("clicco <li></li>");
                //console.log(newElementi, newElementi.completato);
                var vm = this;
                //console.log(vm.lista[index], vm.lista[index].completato);
                if (vm.lista[index].completato == false) {
                    vm.lista[index].completato = true;
                    //newElementi.completato = true;
                    //console.log(vm.lista[index].completato);
                    //console.log(vm.lista);
                    //console.log(newElementi, newElementi.completato);
                    //console.log(vm.lista.completato);
                } else {
                    vm.lista[index].completato = false;
                    //console.log(vm.lista);
                    //console.log(newElementi.completato)
                }
            }
        } 
    }
);

/* BONUS:
Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???). */