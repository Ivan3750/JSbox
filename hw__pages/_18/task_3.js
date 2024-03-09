class Storage{

    constructor(items){
        this.items = items
    }
    getItems(){
        return this.items
    }
    addItem(item){
        this.items.push(item)
    }
    removeItem(item){
        if( this.items.includes(item)){
            const index = this.items.indexOf(item)
            this.items.splice(index, 1);
        }else{
            return this.items 
        } 
    }

}


const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);
   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]