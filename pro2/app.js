const Express = require("express");

var app = new Express();

app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/addbook',(req,res)=>{
    res.render('addbook');
});

Books=[{
    
   
    'title':'The pilgrims progress',
    'author':'john bunyan',
    'publisher':'Oxford University press',
    'date_of_publication':1678,
    'distributor':'Oxford University press',
    'price':300,
    'Description':'Englsh Classic'
},

     
    {
        'title':'Robinson crusoe',
        'author':'Daniel defoe',
        'publisher':'William Taylor',
        'date_of_publication':1719,
        'distributor':'Willaim Taylor',
        'price':200,
        'Description':'Historical fiction'

    },
    {
        'title':'Gulliver travels',
        'author':'Jonathan swift',
        'publisher':'Benjamine Motte',
        'date_of_publication':1712,
        'distributor':'Benjamine Motte',
        'price':400,
        'Description':'Fantasy'
    },
    {
        'title':'Clarrisa',
        'author':'Richardson',
        'publisher':'Edmonton',
        'date_of_publication':1748,
        'distributor':'Edmonton',
        'price':205,
        'Description':'Novel'

    },
    {
        'title':'Tom jones',
        'author':'Henry Fielding',
        'publisher':'Andrew Miller',
        'date_of_publication':1749,
        'distributor':'Andrew Miller',
        'price':300,
        'Description':'Novel'

    },
    {
        'title':'The life and opinions',
        'author':'Laurence Sterne',
        'publisher':'Anward',
        'date_of_publication':1759,
        'distributor':'Anward',
        'price':260,
        'Description':'Novel'
    },
    {
        'title':'Emma',
        'author':'Jane Austene',
        'publisher':'pearson',
        'date_of_publication':1815,
        'distributor':'pearson',
        'price':225,
        'Description':'Novel'

    },
    {
        'title':'Frankenstiene',
        'author':'Mary shelly',
        'publisher':'Mavor and Jones',
        'date_of_publication':1818,
        'distributor':'Mavor and Jones',
        'price':225,
        'Description':'English classic'

    },
    {
        'title':'Nightmare Abbey',
        'author':'Thomas love',
        'publisher':'Hookam',
        'date_of_publication':1818,
        'distributor':'Hookam',
        'price':280,
        'Description':'novel'
    },
    {
        'title':'Sybli',
        'author':'Benjamine Disraeli',
        'publisher':'Henry Colburn',
        'date_of_publication':1989,
        'distributor':'Henry Colburn',
        'price':400,
        'Description':'novel'
    }];


app.get('/viewbook',(req,res)=>{
    res.render('viewbook',Books);
});

app.listen(3003,()=>{
    console.log("Server running on 3003");
});


   

