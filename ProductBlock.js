const block = [
    {img: "Image/noot noot.jpg", type: "Dice Set 1", id:"A01", promotype: "Promo"}, 
    {img: "Image/noot noot.jpg", type: "Dice Set 2", id:"A02", promotype: "LowPrice"},
    {img: "Image/noot noot.jpg", type: "Dice Set 3", id:"A03", promotype: "DropPrice"},
    {img: "Image/noot noot.jpg", type: "Dice Set 4", id:"A04", promotype: "TwoFOne"},
    {img: "Image/noot noot.jpg", type: "Dice Set 5", id:"B01", promotype: "None"},
    {img: "Image/noot noot.jpg", type: "Dice Set 6", id:"B02", promotype: "Promo"},
    {img: "Image/noot noot.jpg", type: "Dice Set 7", id:"B03", promotype: "Promo"},
    {img: "Image/noot noot.jpg", type: "Dice Set 8", id:"B04", promotype: "Promo"},]

    for(let i = 0; i < block.length; i++)
    {createObject(block[i].img, block[i].type, block[i].id, block[i].promotype);}

    function createObject(img, Pname, id, promotype){
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

        //<Product Info>
        var caption = document.createElement("figcaption");
        var text = document.createTextNode("Product: " + Pname + "\n" + "ID No: " + id);
        caption.appendChild(text);
        box.appendChild(caption);}