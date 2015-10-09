function book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
    this.on_sale = function(discount){
        this.price *= 1.0-discount;
    };
}

my_book = new book("book", "me", 9001);
/*console.log(my_book.title);
console.log(my_book.author);
console.log(my_book.price);
my_book.on_sale(0.05);
console.log(my_book.price);*/

var my_table = document.createElement("table");
my_table.id = "table";
var row = document.createElement("tr");
add_table_data(row,"Title:");
add_table_data(row,"Author:");
add_table_data(row,"Price:");
my_table.appendChild(row);

function add_book(book,table){
    var row = document.createElement("tr");
    add_table_data(row,book.title);
    add_table_data(row,book.author);
    add_table_data(row,book.price);
    table.appendChild(row);
    //document.body.appendChild(table);
}

function add_table_data(row,data){
    var td = document.createElement("td");
    td.innerHTML = data;
    row.appendChild(td);
}

//add_book(my_book,my_table);

function add_new_book_to_table(){
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var price = document.getElementById("price");
    add_book(new book(title.value,author.value,parseInt(price.value)),my_table);
    title.value = "";
    author.value = "";
    price.value = "";
}

document.body.appendChild(my_table);