const block = [
    {img: "Image/noot noot.jpg", name: "Dice Set 1", promotype: "Promo", price: "300.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"}, 
    {img: "Image/noot noot.jpg", name: "Dice Set 2", promotype: "LowPrice", price: "450.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 3", promotype: "DropPrice", price: "500.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 4", promotype: "TwoFOne", price: "370.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 5", promotype: "None", price: "310.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 6", promotype: "Promo", price: "320.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 7", promotype: "Promo", price: "350.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},
    {img: "Image/noot noot.jpg", name: "Dice Set 8", promotype: "Promo", price: "800.00"
            ,description: "Description:\nTesting Description\nTesting Description\nTesting Description", linked: "https://www.youtube.com/"},]

    for(let i = 0; i < block.length; i++)
    {createObject(block[i].img, block[i].name, block[i].promotype, block[i].price, block[i].description, block[i].linked);}

    function createObject(img, Pname, promotype, price, descriptor, linked){
        //<Figure>
        var box = document.createElement("figure");
        box.setAttribute("id", promotype);
        document.getElementById("text").appendChild(box);

        //<Promo Header>
        var promotag = document.createElement("div");
        //promotag.setAttribute("style", "background-color: yellowgreen; width: 230px; height: 35px; margin: -1px 0 0 -25px; border-radius: 0 0 50px 0; font-size:30px; color: white;")
        promotag.setAttribute("id", promotype);
        box.appendChild(promotag);

        //setup a switch case here
        var promoid = promotype;
        switch(promoid){
            case "Promo":
                var promotext = document.createTextNode("PROMO");
                break;
            case "LowPrice":
                var promotext = document.createTextNode("LOW PRICE");
                break;
            case "DropPrice":
                var promotext = document.createTextNode("PRICE DROP");
                break;
            case "TwoFOne":
                var promotext = document.createTextNode("2 FOR 1");
                break;
            case "None":
                var promotext = document.createTextNode("NO PROMO");
            default:
                break;
        }
        promotag.appendChild(promotext);

        //<Image Loader>
        var image = document.createElement("img");
        image.setAttribute("src", img);
        box.appendChild(image);

        //<Product Title>
        var caption = document.createElement("figcaption");
        caption.setAttribute("id", "nameProduct");
        var title = document.createElement("p");
        title.setAttribute("style", "font-size: 18px; margin: 0 0 -15px 0; font-weight: bold; text-decoration: underline; height: 40px; overflow:hidden;")
        var text = document.createTextNode(Pname);
        title.appendChild(text);

        //<Product Description>
        var descholder = document.createElement("p");
        var desc = document.createTextNode(descriptor);
        descholder.setAttribute("style", "font-size: 15px; margin: -20px 0 -15px 0; height: 75px; overflow: auto;")
        descholder.appendChild(desc)
        
        //<Product Price>
        var priceholder = document.createElement("p");
        priceholder.setAttribute("style", "font-size: 18px; margin: 0 0 -15px 0;")
        var pricing = document.createTextNode("\n" + "USD " + price);
        priceholder.appendChild(pricing);

        caption.appendChild(title);
        caption.appendChild(descholder);
        caption.appendChild(priceholder);
        box.appendChild(caption);

        //<Button>
        var button = document.createElement("a");
        button.setAttribute("href", linked);
        button.setAttribute("id", "button");
        button.setAttribute("target", "_blank");
        var ltext = document.createTextNode("BUY NOW!");
        button.appendChild(ltext);
        box.appendChild(button);}