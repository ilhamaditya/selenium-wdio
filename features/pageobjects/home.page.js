class homePage {
    get dropdownShopByCategory(){
        return $("#gh-shop-a")
    }

    get selectCellphonesaccessories(){
        return $("td:nth-child(1) ul:nth-child(4) li:nth-child(4) > a.scnd")
    }
 
}

export default new homePage();