class CellPhonesSmartWatchesAccessoriesPage {

    //scenario 1
    get linkCellPhonesSmartphones(){
        return $("li:nth-child(3) > a.b-textlink.b-textlink--parent")
    }

    get linkAllFilters(){
        return $(".brm__all-filters.fake-link")
    }

    get subpanelScreenSize(){
        return $(".x-overlay-aspect:nth-child(7) > span.x-overlay-aspect__label")
    }

    get checkOptionNotSpecified(){
        return $(".x-overlay-sub-panel__col:nth-child(3) div.x-refine__multi-select.x-overlay-sub-panel__aspect-option:nth-child(3) span.field label.field__label.field__label--end.x-refine__multi-select-label > span.cbx.x-refine__multi-select-cbx")
    }

    get subpanelScreenSize(){
        return $(".x-overlay-aspect:nth-child(7) > span.x-overlay-aspect__label")
    }

    get subpanelPrice(){
        return $(".x-overlay-aspect:nth-child(23) > span.x-overlay-aspect__label")
    }

    get inputPriceFrom(){
        return $(".x-textrange__input--from")
    }

    get inputPriceTo(){
        return $(".x-textrange__input--to")
    }

    get subpanelItemLocation(){
        return $(".x-overlay-aspect:nth-child(25) > span.x-overlay-aspect__label")
    }

    get checkOptionAsia(){
        return $(".x-overlay-sub-panel__aspect-option:nth-child(6) .radio__control")
    }

    get btnApply(){
        return $(".x-overlay-footer__apply-btn.btn.btn--primary")
    }
    
    get btnFilterApplied(){
        return $(".brm__item.brm__item--applied:nth-child(1) div.x-flyout.brm__flyout.brm__flyout--selected > button.x-flyout__button")
    }

    get btnAssertScreenSize(){
        return $(".brm__aspect-item.brm__aspect-item--applied:nth-child(1) a:nth-child(1) > span.brm__item-label:nth-child(1)")
    }

    get btnAssertPrice(){
        return $(".brm__aspect-item.brm__aspect-item--applied:nth-child(2) a:nth-child(1) > span.brm__item-label:nth-child(1)")
    }

    get btnAssertItemLocation(){
        return $(".brm__aspect-item.brm__aspect-item--applied:nth-child(3) a:nth-child(1) > span.brm__item-label:nth-child(1)")
    }

    //scenario 2
    get inputKeyword(){
        return $(".gh-tb.ui-autocomplete-input")
    }

    get selectCategory(){
        return $(".gh-sb > option:nth-child(12)")
    }

    get btnSearch(){
        return $("#gh-btn")
    }

    get matchString(){
        return $(".s-item.s-item__pl-on-bottom.s-item--watch-at-corner:nth-child(2) div.s-item__wrapper.clearfix div.s-item__info.clearfix a.s-item__link > h3.s-item__title")
    }
    

}

export default new CellPhonesSmartWatchesAccessoriesPage();